// on import Bcypqt
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');
  
  // on import le model user pour enregistrer et lire le users
const User = require('../models/user');

// fonction pour enregistrement des nouveaux utilisateurs
exports.signup =( req, res,next )=>{
    // on hache le momt de passe
    bcrypt.hash(req.body.password,10)
    // on recupere le hash et on l'enregistre dans le new user
    .then(hash => {
        const user = new User({
            email: req.body.email, 
            password: hash
        });
        user.save()// on enregistre le user dans la base de donnees
            .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
            .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};
// fonction pour connecter des utilisateurs existants
exports.login=(req, res,next)=>{
    User.findOne({ email: req.body.email })// on cherche l'utilisateur qui correspond aux mail ds BD
    // on verif qu'on a un user sinon erreur
    .then(user => {
        if (!user) {
            return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }//on comparer le mot de passe de la requette avec le mp hashe
    bcrypt.compare(req.body.password, user.password)
        .then(valid => {// return true ou false
            if (!valid) {
                return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            res.status(200).json({
                userId: user._id,
                token: jwt.sign(
                    { userId: user._id },
                    'RANDOM_TOKEN_SECRET',
                    { expiresIn: '24h' }
                )
            });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};

