/* ============================================================================
   PONT BASE DE DONNÉES → SITE
   ----------------------------------------------------------------------------
   1) Table `photos` -> window.PHOTO_DB { pid: url }. Le moteur utilise cette
      URL en priorité, puis la photo locale, puis le SVG de secours.
   2) Tables `services_validation` (horaires) + `photo_candidates` (menus) ->
        window.INFO_DB      = { service_id: { name, opening_hours, menu_url, menu_kind } }
        window.INFO_BY_NAME = { nom_normalisé: même enregistrement }
      Le moteur s'en sert pour la fenêtre « Renseignements » (horaire + menu).
      Liaison d'un sous-bloc :  data.js item.sid (service_id) en priorité,
      sinon correspondance par nom.
      Le menu vient de `chosen_photo_url` si une photo a été validée dans
      admin-curation.html, sinon directement du candidat Metabase (PDF/image).
   Aucune dépendance externe : de simples fetch sur l'API REST de Supabase.
   ========================================================================== */
(function () {
  window.PHOTO_DB = {};
  window.OVERRIDE_DB = {};    // pid -> { description, opening_hours, menu_url, booking_mode, booking_url } (admin.html)
  window.INFO_DB = {};        // service_id -> { name, opening_hours, menu_url, menu_kind }
  window.INFO_BY_NAME = {};   // nom normalisé -> même enregistrement
  var cfg = window.SUPABASE_CONFIG || {};

  // Pas de config -> on garde les photos locales, sans bloquer le site.
  if (!cfg.url || !cfg.anonKey) {
    window.PHOTO_DB_READY = Promise.resolve();
    return;
  }

  var base = cfg.url.replace(/\/+$/, '');
  var headers = { apikey: cfg.anonKey, Authorization: 'Bearer ' + cfg.anonKey };

  // Normalise un nom pour la correspondance (minuscules, sans accents/ponctuation).
  function norm(s) {
    return String(s || '').toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9]+/g, ' ').trim();
  }
  function isPdf(u) { return /\.pdf($|\?)/i.test(u || ''); }
  function getJson(path) {
    return fetch(base + path, { headers: headers })
      .then(function (r) { return r.ok ? r.json() : []; })
      .catch(function () { return []; });
  }
  // Récupère (ou crée) l'enregistrement d'un service_id dans INFO_DB.
  function recFor(sid) {
    if (!sid) return null;
    return window.INFO_DB[sid] || (window.INFO_DB[sid] = { name: '', opening_hours: '', menu_url: '', menu_kind: '' });
  }

  // 1) Photos + overrides éditables (description / horaires / menu) par pid.
  //    select=* : reste robuste même si la migration schema-overrides.sql
  //    n'a pas encore ajouté les colonnes (champs alors absents = ignorés).
  var pPhotos = getJson('/rest/v1/photos?select=*').then(function (rows) {
    (rows || []).forEach(function (row) {
      if (!row || !row.pid) return;
      if (row.url) { window.PHOTO_DB[row.pid] = row.url; }
      if (row.description || row.opening_hours || row.menu_url || row.booking_mode || row.booking_url) {
        window.OVERRIDE_DB[row.pid] = {
          description: row.description || '',
          opening_hours: row.opening_hours || '',
          menu_url: row.menu_url || '',
          booking_mode: row.booking_mode || '',
          booking_url: row.booking_url || ''
        };
      }
    });
  });

  // 2) Horaires d'ouverture (+ photo de menu déjà validée si présente)
  var pSv = getJson('/rest/v1/services_validation?select=service_id,name,opening_hours,chosen_photo_url').then(function (rows) {
    (rows || []).forEach(function (row) {
      if (!row || !row.service_id) return;
      var rec = recFor(row.service_id);
      if (row.name) rec.name = row.name;
      if (row.opening_hours) rec.opening_hours = row.opening_hours;
      if (row.chosen_photo_url) { rec.menu_url = row.chosen_photo_url; rec.menu_kind = isPdf(row.chosen_photo_url) ? 'pdf' : 'image'; }
      if (row.name) window.INFO_BY_NAME[norm(row.name)] = rec;
    });
  });

  // 3) Menus (candidats Metabase) : sert si aucune photo validée pour le service
  var pCand = getJson('/rest/v1/photo_candidates?source=eq.metabase&select=service_id,libelle,url,kind').then(function (rows) {
    (rows || []).forEach(function (c) {
      if (!c || !c.service_id || !c.url) return;
      var rec = recFor(c.service_id);
      if (!rec.menu_url) { rec.menu_url = c.url; rec.menu_kind = c.kind || (isPdf(c.url) ? 'pdf' : 'image'); }
      if (!rec.name && c.libelle) rec.name = c.libelle;
      if (c.libelle && !window.INFO_BY_NAME[norm(c.libelle)]) window.INFO_BY_NAME[norm(c.libelle)] = rec;
    });
  });

  window.PHOTO_DB_READY = Promise.all([pPhotos, pSv, pCand]);
})();
