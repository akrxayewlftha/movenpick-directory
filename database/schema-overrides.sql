-- ============================================================================
--  ROOM DIRECTORY — Overrides éditables par sous-bloc (description / horaires /
--  menu), gérés depuis admin.html et lus en priorité par le site.
--  À exécuter UNE FOIS dans Supabase : SQL Editor → coller → Run.
--  (Complète database/schema.sql. Ne le remplace pas.)
--
--  Ajoute 3 colonnes à la table `photos` (déjà clé = pid) :
--    description    : remplace le texte (body) du sous-bloc sur le site
--    opening_hours  : horaire d'ouverture affiché dans la fenêtre « Renseignements »
--    menu_url       : URL d'une photo/PDF de menu (fenêtre « Renseignements »)
--  Vides = le site garde le texte de data.js et les infos Metabase (si câblées).
-- ============================================================================

alter table public.photos add column if not exists description   text;
alter table public.photos add column if not exists opening_hours text;
alter table public.photos add column if not exists menu_url      text;

-- Réservation par sous-bloc :
--   booking_mode = 'whatsapp' (défaut) | 'link' | 'none'
--   booking_url  = URL de réservation, utilisée seulement quand mode = 'link'
-- Vide / 'whatsapp' = bouton « Réserver » WhatsApp (si un numéro est configuré).
-- 'link' = le bouton ouvre booking_url. 'none' = pas de bouton sur le site.
alter table public.photos add column if not exists booking_mode  text;
alter table public.photos add column if not exists booking_url   text;

-- Les politiques RLS existantes de `photos` (lecture/écriture publiques pour cet
-- outil interne) couvrent déjà ces nouvelles colonnes : rien d'autre à faire.
-- Le bucket de stockage "photos" (schema.sql) accueille aussi les fichiers de
-- menu, rangés sous le préfixe  menus/<pid>.<ext>.
