-- ============================================================================
--  ROOM DIRECTORY — Base de données des photos (Supabase / PostgreSQL)
--  À exécuter UNE FOIS dans Supabase : menu "SQL Editor" → coller → Run.
--  Crée la table `photos`, le bucket de stockage `photos` et les règles d'accès.
-- ============================================================================

-- 1) Table : une ligne par bloc / sous-bloc (clé = pid utilisé dans data.js)
create table if not exists public.photos (
  pid        text primary key,
  url        text,                       -- URL publique de la photo (vide = photo locale)
  bloc       text,                       -- nom du bloc (catégorie) — pour s'y retrouver
  libelle    text,                       -- nom du sous-bloc (item)
  updated_at timestamptz default now()
);

-- 2) Sécurité au niveau des lignes
alter table public.photos enable row level security;

-- Lecture publique (le site doit pouvoir lire les URLs)
drop policy if exists "photos_read" on public.photos;
create policy "photos_read" on public.photos for select using (true);

-- Écriture publique : OUTIL INTERNE. La page admin.html est protégée par mot de
-- passe (côté client). Pour une sécurité forte, voir la note du GUIDE (Auth).
drop policy if exists "photos_insert" on public.photos;
create policy "photos_insert" on public.photos for insert with check (true);

drop policy if exists "photos_update" on public.photos;
create policy "photos_update" on public.photos for update using (true) with check (true);

-- 3) Stockage des fichiers : bucket public "photos"
insert into storage.buckets (id, name, public)
values ('photos', 'photos', true)
on conflict (id) do nothing;

-- Lecture publique des fichiers du bucket
drop policy if exists "photos_obj_read" on storage.objects;
create policy "photos_obj_read" on storage.objects
  for select using (bucket_id = 'photos');

-- Upload / remplacement dans le bucket
drop policy if exists "photos_obj_insert" on storage.objects;
create policy "photos_obj_insert" on storage.objects
  for insert with check (bucket_id = 'photos');

drop policy if exists "photos_obj_update" on storage.objects;
create policy "photos_obj_update" on storage.objects
  for update using (bucket_id = 'photos') with check (bucket_id = 'photos');

-- ============================================================================
--  Astuce : les lignes (pid / bloc / libellé) se créent automatiquement
--  d'un clic depuis admin.html → bouton « Initialiser / synchroniser ».
--  Tu peux aussi éditer la table directement dans Supabase (Table Editor).
-- ============================================================================
