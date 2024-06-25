# My EZ Start Boilerplate

My EZ Start est une base de code Next.js complète et prête à l'emploi, offrant des fonctionnalités intégrées pour l'authentification, l'internationalisation, la gestion des thèmes, et bien plus encore. Idéale pour démarrer rapidement vos projets Next.js.

## Fonctionnalités

- **Authentification** : Intégration avec NextAuth.js pour la gestion des utilisateurs et des sessions.
- **Internationalisation** : Support multilingue avec NextIntl.
- **Thématisation** : Gestion des thèmes avec Tailwind CSS et Next Themes.
- **Formulaires** : Gestion avancée des formulaires avec React Hook Form et Zod.
- **Animations** : Création d'animations fluides avec Framer Motion.

## Installation

1. Clonez le dépôt :

   ```bash
   git clone <repository-url>
   cd my-ez-start
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Configurez les variables d'environnement :
   Créez un fichier `.env` et ajoutez les variables nécessaires :

   ```env
   DATABASE_URL=your-database-url
   AUTH_SECRET=your-auth-secret
   AUTH_SALT=your-auth-salt
   ```

4. Configurez la base de données et appliquez les migrations :

   ```bash
   npx prisma migrate dev
   ```

5. Lancez le projet :
   ```bash
   npm run dev
   ```

## Utilisation

1. **Page d'accueil** : Présente les fonctionnalités de la boilerplate.
2. **Authentification** : Accédez aux pages de connexion et d'inscription.
3. **Internationalisation** : Changez la langue avec le sélecteur de langue.
4. **Thématisation** : Changez le thème (clair/sombre) avec le sélecteur de thème.
5. **Animations** : Admirez les animations de fond Aurora.

## Contribution

Les contributions sont les bienvenues. Veuillez soumettre des pull requests et signaler les problèmes sur le dépôt GitHub.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](./LICENSE) pour plus d'informations.
