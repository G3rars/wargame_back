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
    const mensaje = "Este es el tablero";  
    res.status(200).json({ message: mensaje });
  });

/**
 * @swagger
 * /ataques/ataque:
 *   patch:
 *     summary: Este endpoint es de prueba!
 *     description: La prueba fue exitosa.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               modelCoord:
 *                 type: object
 *                 properties:
 *                   haveBase:
 *                     type: boolean
 *                     default: false
 *                   isAttacked:
 *                     type: boolean
 *                     default: false
 *     responses:
 *       200:
 *         description: Esto debe actualizar el tablero.
 *       500:
 *         description: Error de servidor.   
 */

router.patch('/ataque', function(req, res) {
    const ataque = "Es un ataque";  
    res.status(200).json({ message: ataque });
}); 

module.exports = router;

