# Configuration EmailJS pour le Formulaire de Contact

Ce guide vous explique comment configurer EmailJS pour recevoir les messages du formulaire de contact directement dans votre boîte email.

---

## 📋 Étape 1: Créer un Compte EmailJS

1. **Allez sur** https://www.emailjs.com/
2. **Cliquez sur** "Sign Up" (en haut à droite)
3. **Créez votre compte** avec votre email professionnel (recommandé: asztulman@moliere-avocats.fr)
4. **Vérifiez votre email** et activez votre compte

---

## 📧 Étape 2: Configurer un Service Email

1. **Connectez-vous** à votre dashboard EmailJS
2. **Allez dans** "Email Services" (menu gauche)
3. **Cliquez sur** "Add New Service"
4. **Choisissez** votre fournisseur email:
   - Si vous utilisez Gmail: choisissez "Gmail"
   - Si vous utilisez Outlook: choisissez "Outlook"
   - Autre: choisissez le fournisseur approprié

5. **Connectez votre email**:
   - Pour Gmail: autorisez l'accès à votre compte
   - Pour Outlook: connectez-vous avec vos identifiants

6. **Important**: Notez le **Service ID** qui apparaît (ex: `service_abc1234`)
   - Vous en aurez besoin pour le fichier `.env.local`

---

## 📝 Étape 3: Créer le Template Email

1. **Allez dans** "Email Templates" (menu gauche)
2. **Cliquez sur** "Create New Template"
3. **Configurez le template**:

### Subject (Objet de l'email):
```
Nouvelle demande de contact - {{from_name}}
```

### Content (Corps de l'email en HTML):

**COPIEZ-COLLEZ EXACTEMENT CE CODE** dans la section "Content" du template:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Arial', sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; }
        .field { margin-bottom: 20px; }
        .label { font-weight: bold; color: #1e3a8a; margin-bottom: 5px; display: block; }
        .value { color: #4b5563; padding: 10px; background: #f9fafb; border-radius: 4px; }
        .footer { background: #f3f4f6; padding: 20px; text-align: center; font-size: 12px; color: #6b7280; border-radius: 0 0 8px 8px; }
        .divider { height: 1px; background: #e5e7eb; margin: 20px 0; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1 style="margin: 0; font-size: 24px;">📧 Nouvelle Demande de Contact</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Cabinet Alexandre Sztulman</p>
        </div>

        <div class="content">
            <p style="font-size: 16px; margin-bottom: 20px;">Bonjour Maître Sztulman,</p>

            <p>Vous avez reçu une nouvelle demande de contact via le site web. Voici les détails :</p>

            <div class="divider"></div>

            <div class="field">
                <span class="label">👤 Nom complet :</span>
                <div class="value">{{from_name}}</div>
            </div>

            <div class="field">
                <span class="label">📧 Email :</span>
                <div class="value"><a href="mailto:{{from_email}}" style="color: #3b82f6; text-decoration: none;">{{from_email}}</a></div>
            </div>

            <div class="field">
                <span class="label">💬 Message :</span>
                <div class="value" style="white-space: pre-wrap;">{{message}}</div>
            </div>

            <div class="divider"></div>

            <p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
                <strong>Note :</strong> Ce message a été envoyé via le formulaire de contact du site alexandre-sztulman.com
            </p>
        </div>

        <div class="footer">
            <p style="margin: 0;">Cabinet Alexandre Sztulman - Avocat au Barreau de Paris</p>
            <p style="margin: 5px 0;">22 avenue Franklin D. Roosevelt, 75008 Paris</p>
            <p style="margin: 5px 0;">📞 +33 6 59 41 09 15 | 📧 asztulman@moliere-avocats.fr</p>
        </div>
    </div>
</body>
</html>
```

4. **Configurez les paramètres** dans l'onglet "Settings":
   - **To Email**: Mettez votre email professionnel (asztulman@moliere-avocats.fr)
   - **From Name**: Cabinet Alexandre Sztulman
   - **Reply To**: {{from_email}} (important pour pouvoir répondre directement)

5. **Sauvegardez** le template
6. **Important**: Notez le **Template ID** qui apparaît (ex: `template_xyz5678`)

---

## 🔑 Étape 4: Obtenir votre Public Key

1. **Allez dans** "Account" (menu gauche)
2. **Section "General"** ou "API Keys"
3. **Copiez** votre **Public Key** (une longue chaîne de caractères)
   - Exemple: `abcDEF123ghi456JKL789`

---

## ⚙️ Étape 5: Configurer le Fichier .env.local

**Sur votre ordinateur**, ouvrez le fichier `.env.local` qui se trouve à la racine du projet.

**Remplacez** les valeurs `votre_service_id`, `votre_template_id` et `votre_public_key` par les vraies valeurs que vous avez notées:

```env
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=service_abc1234
VITE_EMAILJS_TEMPLATE_ID=template_xyz5678
VITE_EMAILJS_PUBLIC_KEY=abcDEF123ghi456JKL789

# Supabase Configuration (ne pas toucher)
VITE_SUPABASE_URL=https://qoshuifjdjulpizikemg.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFvc2h1aWZqZGp1bHBpemlrZW1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ2NjExOTgsImV4cCI6MjA4MDIzNzE5OH0.dDpHxAerc_wf7IBgziLSD_BHmrCsAydc-UzHTRx-Hv8
```

**Sauvegardez** le fichier.

---

## 🌐 Étape 6: Configurer sur Netlify (IMPORTANT)

Pour que le formulaire fonctionne sur le site en production:

1. **Connectez-vous** à https://app.netlify.com
2. **Sélectionnez** votre site
3. **Allez dans** Site configuration > Environment variables
4. **Ajoutez** ces 3 variables:

| Key | Value |
|-----|-------|
| `VITE_EMAILJS_SERVICE_ID` | Votre Service ID (ex: service_abc1234) |
| `VITE_EMAILJS_TEMPLATE_ID` | Votre Template ID (ex: template_xyz5678) |
| `VITE_EMAILJS_PUBLIC_KEY` | Votre Public Key (la longue chaîne) |

5. **Sauvegardez** et **redéployez** le site

---

## ✅ Étape 7: Tester

### Test en local:
1. Lancez le site en local: `npm run dev`
2. Allez sur la page Contact
3. Remplissez le formulaire et envoyez
4. Vous devriez voir un message de succès
5. Vérifiez votre boîte email

### Test en production:
1. Allez sur votre site en ligne
2. Testez le formulaire
3. Vérifiez la réception de l'email

---

## 🎨 Ce qui a été Configuré

### Design du Formulaire:
✅ Message de chargement pendant l'envoi avec animation
✅ Désactivation des champs pendant l'envoi
✅ Message de succès élégant avec icône
✅ Message d'erreur clair en cas de problème
✅ Réinitialisation automatique après succès

### Email Professionnel Reçu:
✅ Design professionnel avec en-tête bleu
✅ Informations bien structurées et lisibles
✅ Possibilité de répondre directement (Reply To)
✅ Footer avec coordonnées du cabinet
✅ Compatible tous les clients email

---

## 🔧 Dépannage

### Le formulaire ne s'envoie pas:
1. Vérifiez que toutes les variables dans `.env.local` sont correctes
2. Vérifiez la console du navigateur (F12) pour les erreurs
3. Vérifiez que les variables sont aussi sur Netlify

### L'email n'arrive pas:
1. Vérifiez vos spams
2. Vérifiez que l'email "To" dans le template EmailJS est correct
3. Vérifiez les logs dans EmailJS Dashboard > History

### Message "Configuration error":
- Les variables d'environnement ne sont pas définies
- Vérifiez `.env.local` et redémarrez le serveur local

---

## 📱 Support

Si vous avez des problèmes:
1. Consultez la documentation EmailJS: https://www.emailjs.com/docs/
2. Vérifiez l'historique des emails dans EmailJS Dashboard
3. Contactez le support EmailJS si nécessaire

---

## 🎉 C'est Terminé !

Une fois ces étapes complétées, votre formulaire de contact est entièrement fonctionnel et vous recevrez tous les messages directement dans votre boîte email professionnelle.

Le template d'email est conçu pour être:
- ✅ Professionnel et élégant
- ✅ Facile à lire
- ✅ Compatible avec tous les clients email
- ✅ Avec possibilité de répondre directement

**Note**: Le plan gratuit d'EmailJS permet 200 emails/mois, ce qui devrait être largement suffisant pour un site de cabinet d'avocat.
