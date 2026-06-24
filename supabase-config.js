/* ============================================================================
   CONFIGURATION SUPABASE — à remplir une seule fois PAR HÔTEL
   ----------------------------------------------------------------------------
   1. Crée un projet gratuit sur https://supabase.com (voir database/GUIDE-SUPABASE.md)
   2. Dans le projet : Settings → API
        - "Project URL"        -> colle-le dans  url
        - "anon public" key    -> colle-la dans  anonKey
   3. Le bucket de stockage des photos s'appelle "photos" (créé par le SQL fourni).
   4. adminPassword : mot de passe simple pour ouvrir admin.html (protection légère).

   Tant que url / anonKey ne sont pas remplis, le site fonctionne normalement
   avec les photos LOCALES (assets/img/items/…). La base ne fait que les remplacer.
   Chaque hôtel doit avoir SON propre projet Supabase (ne pas partager les clés).
   ========================================================================== */
window.SUPABASE_CONFIG = {
  url:          "",   // ex. "https://abcdxyz.supabase.co"
  anonKey:      "",   // ex. "eyJhbGciOiJIUzI1NiIsInR..."
  bucket:       "photos",
  adminPassword:"admin"   // change-le ! sert seulement à ouvrir la page admin
};
