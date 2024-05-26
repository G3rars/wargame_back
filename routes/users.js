const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Este endpoint es de prueba!
 *     description: La prueba fue exitosa.
 *     responses:
 *       200:
 *         description: Esto devuelve de momento un Hola.
 *       500:
 *         description: Error de servidor.   
 */

/* GET users listing. */
router.get('/', function(req, res) {
  res.json({'message': 'hola'})
});

module.exports = router;
