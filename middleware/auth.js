// middleware d'authentification 

const jwt = require('jsonwebtoken');
require('dotenv').config();
 
module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]; // on sépare le token créé au niveau de l'espace et on prend la 2nd valeur
        // on se débarrasse du BEARED
        const decodedToken = jwt.verify(token, process.env.TOKEN); // on vérifie que le token correspond à ce qui était rentré
        const userId = decodedToken.userId; // on récupère l'idToken il est comme un objet js
        if(req.body.userId && req.body.userId !== userId){ // si les users id ne correspondent pas... 
            throw 'User Id non valable !';
        } else {
            next(); // si tout est bon on peut passer à la suite
        }
    }
    catch {
        res.status(401).json({ error: error | 'Utilisateur non authentifié !' })
    }
};
