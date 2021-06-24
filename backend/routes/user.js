const express = require('express');// on importe expres
const router = express.Router();   // on créer le router avec la fonction router d'express

 // on recupere le controlleur pour associer les fonctions aux  ROUTES
const userCtrl = require('../controllers/user');

// on creer les routes
router.post('/signup', userCtrl.signup);// pour envoyer les info (email + password) d'un nouvel utilisateur
router.post('/login',userCtrl.login);// pour envoyer les informations d'un utilisateur déjà existan

module.exports = router;// on export le router