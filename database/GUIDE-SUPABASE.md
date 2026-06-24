# Base de données des photos — Mise en route (Supabase, gratuit)

Ce système permet de **changer les photos de chaque bloc et sous-bloc** depuis une
page d'administration, sans toucher au code. Les photos sont stockées dans
**Supabase** (gratuit). Si la base est vide ou hors-ligne, le site retombe
automatiquement sur les **photos locales** (`assets/img/items/…`) puis sur les
illustrations SVG — il reste donc toujours fonctionnel.

---

## 1. Créer un projet Supabase (5 min, gratuit, sans carte bancaire)

1. Va sur **https://supabase.com** → *Start your project* → connecte-toi (GitHub ou e-mail).
2. *New project* : choisis un nom (ex. `room-directory`), un mot de passe de base de
   données (note-le), une région proche (ex. *West EU / Paris*). Crée le projet.
3. Patiente ~1 minute que le projet démarre.

## 2. Créer la table et le stockage

1. Dans le projet, menu de gauche → **SQL Editor** → *New query*.
2. Ouvre le fichier **`database/schema.sql`** (à côté de ce guide), copie tout son
   contenu, colle-le dans l'éditeur, puis clique **Run**.
3. Cela crée : la table `photos`, le bucket de stockage `photos`, et les règles d'accès.

## 3. Récupérer les clés

1. Menu de gauche → **Project Settings** (l'engrenage) → **API**.
2. Copie :
   - **Project URL** (ex. `https://abcdxyz.supabase.co`)
   - **anon public** (la clé `anon`, *pas* la `service_role`)

## 4. Renseigner la configuration

Ouvre **`supabase-config.js`** (à la racine du site) et remplis :

```js
window.SUPABASE_CONFIG = {
  url:          "https://abcdxyz.supabase.co",   // ← ton Project URL
  anonKey:      "eyJhbGciOiJIUzI1NiIsInR...",    // ← ta clé anon public
  bucket:       "photos",
  adminPassword:"choisis-un-mot-de-passe"         // ← pour ouvrir admin.html
};
```

> Chaque hôtel doit avoir **son propre projet Supabase** (ou au moins ses propres
> clés). Ne partage pas la même config entre plusieurs sites.

## 5. Initialiser puis gérer les photos

1. Ouvre **`admin.html`** dans le navigateur. Saisis le mot de passe (`adminPassword`).
2. Clique **« Initialiser / synchroniser les blocs »** : crée une ligne par
   bloc/sous-bloc dans la base (lues depuis `data.js`).
3. Pour chaque bloc/sous-bloc, clique **« Remplacer… »** et choisis une image.
   Elle est envoyée dans Supabase et le site l'utilisera aussitôt.
   - Pastille **« base »** = photo servie depuis Supabase.
   - Pastille **« locale »** = photo locale par défaut (pas encore remplacée).
   - **« réinitialiser »** = revenir à la photo locale.
4. Recharge `index.html` (et `/en/`) : les nouvelles photos s'affichent.

---

## Comment ça marche (pour info)

- `photos-db.js` lit la table `photos` et construit `window.PHOTO_DB = { pid: url }`.
- Le moteur du site utilise cette URL **en priorité**, sinon `assets/img/items/<pid>.jpg`,
  sinon l'illustration SVG. Le `pid` est l'identifiant déjà présent dans `data.js`.

## Sécurité — à lire

La page `admin.html` est protégée par un **mot de passe simple côté client** et la
base accepte l'écriture avec la clé `anon`. C'est suffisant pour un **outil interne**,
mais ce **n'est pas** une sécurité forte (quelqu'un d'aguerri pourrait écrire dans la
base). Pour verrouiller réellement :

- Active **Supabase Auth** (connexion par e-mail) et restreins les policies d'écriture
  aux utilisateurs connectés (`auth.role() = 'authenticated'`).
- Garde la clé `service_role` **secrète** (ne jamais la mettre dans le site).

Dis-moi si tu veux que je passe l'admin en authentification réelle.

## Quotas gratuits (large pour un directory)

- Stockage fichiers : **1 Go** • Base : **500 Mo** • largement suffisant pour les photos.
- Aucune carte bancaire requise sur l'offre gratuite.
