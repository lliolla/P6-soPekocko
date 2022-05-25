git push -u origin main

Projet n°6: Construire une API sécurisée pour une application d'avis gastronomiques

 FRONTEND:ng serve http://localhost:4200/
 BACKEND:nodemon serve

Frontend Le frontend était fourni dans le cadre de ce projet Le projet a été généré avec Angular CLI version 7.0.2. Pour faire fonctionner le projet, vous devez installer node-sass à part. Démarrer ng serve pour avoir accès au serveur de développement. Rendez-vous sur . L'application va se recharger automatiquement si vous modifiez un fichier source.

Backend Les technologies utilisées pour le back: un server NodeJS, une base de données MongoDB, le framework Express et le pack Mongoose. Implémenter le fichier .env (fourni dans le dossier mongoDBConnect) à la racine du dossier backend pour la connexion à la base de données MongoDB. Démarrer avec node server ou nodemon server.

Connexion L'utilisateur pour s'inscrire sur l'application doit fournir un email ainsi qu'un mot de passe contenant min 6 caractères (min 1 majuscule, 1 minuscule, 1 chiffre, pas de symboles, pas d'espaces).