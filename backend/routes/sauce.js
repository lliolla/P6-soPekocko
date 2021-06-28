const express = require('express'); //créer un routeur Express
const router = express.Router(); //entregistrement du router dans l'aplication

const auth = require('../middleware/auth');
const multer = require('../middleware/multer');
const sauceCtrl = require('../controllers/sauce');// on importe le controller


router.post('/',auth,multer,sauceCtrl.createSauce);// créer une nouvelle sauce
router.put('/:id',auth,sauceCtrl.modifySauce);// modifier une sauce existante
router.delete('/:id',auth,sauceCtrl.deleteSauce);// effacer une sauce
router.get('/:id',auth,sauceCtrl.getOneSauce);// récuperer une sauce
router.get('/',auth,sauceCtrl.getAllSauces);// récuperer toutes les sauces depuis la base de donne
//router.post('/:id/like', auth, sauceCtrl.userSaucesLiked); // envoyer like ou dislike


module.exports = router;