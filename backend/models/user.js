const mongoose = require('mongose'); // on importe mongoose

const uniqueValidator = require('mongoose-unique -validator')   // on ajoute le validateur  comme plugging au shema
// création du shema de donneees
const userSchema = mongoose.schema({

    email: { type: String, required: true, unique: true },// unique pour eviter plusiuers connexion avec le meme mail
    password: { type: String, required: true }

});

// on applique le validateur au shema avant d'en faire un model
userSchema.plugin(uniqueValidator);// on applique le validator comme argument de la methode
module.exports = mongoose.model('User',sauceShema);   // on export le shema sous forme de model