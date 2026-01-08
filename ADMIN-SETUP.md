# Configuration de l'Administration du Blog

## 1. Configuration de la Base de Données Supabase

### Étape 1: Exécuter le script SQL
1. Connectez-vous à https://supabase.com/dashboard
2. Sélectionnez votre projet: `qoshuifjdjulpizikemg`
3. Allez dans **SQL Editor** (dans le menu de gauche)
4. Cliquez sur **New Query**
5. Copiez-collez le contenu du fichier `supabase-setup.sql`
6. Cliquez sur **Run** (ou appuyez sur Ctrl+Enter)

Ce script va créer:
- La table `posts` pour stocker les articles
- Le bucket de stockage `blog-images` pour les images
- Les politiques de sécurité (RLS) appropriées

### Étape 2: Vérifier la création de la table
1. Allez dans **Table Editor**
2. Vous devriez voir la table `posts` avec les colonnes:
   - id, title, slug, excerpt, content
   - cover_image_url, category, author
   - published, created_at, updated_at

### Étape 3: Vérifier le bucket de stockage
1. Allez dans **Storage**
2. Vous devriez voir le bucket `blog-images`
3. Cliquez dessus et vérifiez qu'il est configuré comme **Public**

## 2. Créer un Utilisateur Administrateur

### Option A: Via l'interface Supabase (Recommandé)
1. Allez dans **Authentication** > **Users**
2. Cliquez sur **Add user** > **Create new user**
3. Entrez:
   - **Email**: votre email (ex: alex@sztulman.com)
   - **Password**: un mot de passe sécurisé (minimum 8 caractères)
   - **Auto Confirm User**: Cochez cette case (pour éviter la confirmation par email)
4. Cliquez sur **Create user**

### Option B: Via le formulaire de signup (si activé)
1. Allez sur votre site: `https://votre-site.netlify.app/admin/login`
2. Le mode est sur "Se connecter" par défaut
3. Entrez un email et mot de passe
4. Cliquez sur "Se connecter"

**Note**: Le signup via l'interface web est actuellement visible dans le code mais peut nécessiter une confirmation par email selon la configuration Supabase.

## 3. Configuration des Variables d'Environnement sur Netlify

1. Connectez-vous à https://app.netlify.com
2. Sélectionnez votre site
3. Allez dans **Site configuration** > **Environment variables**
4. Ajoutez ces deux variables:

```
VITE_SUPABASE_URL=https://qoshuifjdjulpizikemg.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvc2h1aWZqZGp1bHBpemlrZW1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2NjExOTgsImV4cCI6MjA4MDIzNzE5OH0.dDpHxAerc_wf7IBgziLSD_BHmrCsAydc-UzHTRx-Hv8
```

5. Cliquez sur **Save**

## 4. Redéployer le Site

### Via l'interface Netlify:
1. Allez dans **Deploys**
2. Cliquez sur **Trigger deploy** > **Deploy site**

### Via Git (déjà fait):
Les fichiers `netlify.toml` et `supabase-setup.sql` ont été ajoutés au repository.
Netlify va automatiquement redéployer quand vous poussez sur la branche main.

## 5. Tester la Connexion

1. Allez sur `https://votre-site.netlify.app/admin/login`
2. Entrez l'email et le mot de passe de l'utilisateur créé à l'étape 2
3. Cliquez sur "Se connecter"
4. Vous devriez être redirigé vers `/admin` avec le tableau de bord

## Dépannage

### Erreur: "Missing Supabase environment variables"
- Vérifiez que les variables d'environnement sont bien configurées sur Netlify
- Redéployez le site après avoir ajouté les variables

### Erreur lors de la connexion: "Invalid login credentials"
- Vérifiez que l'utilisateur a bien été créé dans Supabase
- Vérifiez que le mot de passe est correct
- Si vous avez créé l'utilisateur sans cocher "Auto Confirm", allez dans Authentication > Users et confirmez l'utilisateur manuellement

### La page admin ne charge pas
- Ouvrez la console du navigateur (F12) pour voir les erreurs
- Vérifiez que les variables d'environnement sont correctement définies
- Vérifiez que le script SQL a bien été exécuté dans Supabase

### Erreur: "row level security policy"
- Assurez-vous que le script SQL a été entièrement exécuté
- Vérifiez dans Table Editor > posts > "..." > "Edit table" > "Enable RLS" est activé
- Vérifiez dans Table Editor > posts > "..." > "View policies" que les politiques sont créées

## URLs Importantes

- **Site de production**: `https://votre-site.netlify.app`
- **Page de connexion admin**: `https://votre-site.netlify.app/admin/login`
- **Dashboard admin**: `https://votre-site.netlify.app/admin`
- **Supabase Dashboard**: https://supabase.com/dashboard/project/qoshuifjdjulpizikemg

## Fonctionnalités de l'Admin

Une fois connecté, vous pourrez:
- Voir tous les articles du blog
- Créer de nouveaux articles avec un éditeur riche
- Modifier des articles existants
- Supprimer des articles
- Gérer les images (upload et suppression automatique)
- Publier/dépublier des articles
- Organiser les articles par catégories
