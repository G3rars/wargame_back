let express = require('express');
let router = express.Router();

/**
 * @swagger
 * /ataques:
 *   get:
 *     summary: Este endpoint es de prueba!
 *     description: La prueba fue exitosa.
 *     responses:
 *       200:
 *         description: Esto debe traer el tablero.
 *       500:
 *         description: Error de servidor.   
 */

/* GET users listing. */
router.get('/', function(req, res) {
    const suma = 1 + 1;  
    res.status(200).json({ message: suma });
  });

module.exports = router;

