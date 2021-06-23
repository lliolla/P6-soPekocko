const express = require('express'); //créer un routeur Express
const router = express.Router(); //entregistrement du router dans l'aplication

const sauceCtrl = require('../controllers/sauce');// on importe le controller

router.post('/',sauceCtrl.createSauce);// créer une nouvelle sauce
router.put('/:id',sauceCtrl.modifySauce);// modifier une sauce existante
router.delete('/:id',sauceCtrl.deleteSauce);// effacer une sauce
router.get('/:id',sauceCtrl.getOneSauce);// récuperer une sauce
router.get('/',sauceCtrl.getAllSauces);// récuperer toutes les sauces depuis la base de donne
//router.post('/:id/like', auth, sauceCtrl.userSaucesLiked); // envoyer like ou dislike


module.exports = router;