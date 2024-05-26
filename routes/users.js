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
  const suma = 1 + 1;  
  res.status(200).json({ message: suma });
});

/**
 * @swagger
 * /users /test:
 *   post:
 *     summary: Este endpoint es de prueba!
 *     description: La prueba fue exitosa.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               numeroUno:
 *                 type: integer
 *               numeroDos:
 *                 type: integer
 *             required:
 *               - numeroUno
 *               - numeroDos 
 *     responses:
 *       200:
 *         description: Esto devuelve de momento un Hola.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       500:
 *         description: Error de servidor.
 */

/* POST test listing. */
router.post('/test', function(req, res) {
  const { numeroUno, numeroDos } = req.body;
  const suma = numeroUno + numeroDos;
  res.status(200).json({ message: `La suma es: ${suma}` });
});

module.exports = router;
