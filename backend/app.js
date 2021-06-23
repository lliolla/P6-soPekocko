const express = require('express');
const mongoose = require('mongoose');


const saucesRoutes = require('./routes/sauce');//on importe le router des sauces
//const userRoutes = require('./routes/user')

const app = express();

// Connexion à la base de données MongoDB
mongoose.connect(' mongodb+srv://fanny:Kiwi260738@cluster0.rx01e.mongodb.net/cluster0?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

// Eviter les erros CORS afin que tout le monde puisse faire des requêtes
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); //accéder à l'API depuis n'importe quelle origine ( '*' )
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');// on donne l'autorisation de utiliser certaines entete
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');// et aussi sur certaines methodes
    next();// j'appelle next() pour passer au middleware d'apres
});
// remplace l'appel a bodyParser qui est déprecié
app.use(express.json());


//app.use(mongoSanitize()); // mongo-sanitize pour prévenir les risques d'injections
//app.use(helmet()); // helmet configure de manière appropriée des en-têtes HTTP, contient 9 fonctions middlewares


//app.use('/images', express.static(path.join(__dirname, 'images'))); // pourque app.js serve le dossier /images 
app.use('/api/sauces', saucesRoutes);// pour le CRUD des sauces - se refer à ./routes/sauces.js
//app.use('/api/auth', userRoutes);// pour l'authentification de l'utilisateur - se refer à ./routes/user.js

  
module.exports = app;// Export de l'application