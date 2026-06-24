/* ============================================================================
   PONT BASE DE DONNÉES → SITE
   ----------------------------------------------------------------------------
   Récupère la table `photos` de Supabase et construit window.PHOTO_DB
   sous la forme  { pid: url, ... }. Le moteur (index.html) utilise ensuite
   cette URL en priorité, et retombe sur la photo locale puis sur le SVG si
   la base est vide ou indisponible.
   Aucune dépendance externe : un simple fetch sur l'API REST de Supabase.
   ========================================================================== */
(function () {
  window.PHOTO_DB = {};
  var cfg = window.SUPABASE_CONFIG || {};

  // Pas de config -> on garde les photos locales, sans bloquer le site.
  if (!cfg.url || !cfg.anonKey) {
    window.PHOTO_DB_READY = Promise.resolve();
    return;
  }

  var endpoint = cfg.url.replace(/\/+$/, '') + '/rest/v1/photos?select=pid,url';
  window.PHOTO_DB_READY = fetch(endpoint, {
    headers: { apikey: cfg.anonKey, Authorization: 'Bearer ' + cfg.anonKey }
  })
    .then(function (r) { return r.ok ? r.json() : []; })
    .then(function (rows) {
      (rows || []).forEach(function (row) {
        if (row && row.pid && row.url) { window.PHOTO_DB[row.pid] = row.url; }
      });
    })
    .catch(function () { /* hors-ligne / erreur -> repli local automatique */ });
})();
