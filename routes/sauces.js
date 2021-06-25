const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth'); // on ramène notre middleware auth pour l'authentification de nos routes
const multer = require('../middleware/multer-config'); // on ramène notre middleware multer pour la gestion des images

const saucesCtrl = require('../controllers/sauces');

// auth vérifie que l'utilisateur est authentifié et n'est pas malveillant 
// multer permet de traiter les images
router.post('/', auth, multer, saucesCtrl.createSauce); 
// + saucesCtrl.createSauce pour récupérer le controller de la route
router.put('/:id', auth, multer, saucesCtrl.modifySauce);
router.delete('/:id', auth, saucesCtrl.deleteSauce);
router.get('/:id', auth, saucesCtrl.getOneSauce);
router.get('/', auth, saucesCtrl.sauces);
router.post('/:id/like', auth, saucesCtrl.setStatut);

module.exports = router;