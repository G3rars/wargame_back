let express = require('express');
let router = express.Router();
const Tablero1 = require('../models/tablero1Model');
const Tablero2 = require('../models/tablero2Model');

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
 *               tablero:
 *                 type: integer
 *                 description: Número del tablero (1 o 2)
 *               position:
 *                 type: string
 *                 description: Coordenada a atacar (e.g., "A2")
 *     responses:
 *       200:
 *         description: Esto debe actualizar el tablero.
 *       500:
 *         description: Error de servidor.   
 */

router.patch('/ataque', async (req, res) => {
    const { tablero, position } = req.body;

    try {
        let model;
        if (tablero === 1) {
            model = Tablero1;
        } else if (tablero === 2) {
            model = Tablero2;
        } else {
            return res.status(400).json({ error: 'Número de tablero no válido. Use 1 o 2.' });
        }

        // Encuentra la posición y actualiza isAttacked a true
        const result = await model.findOneAndUpdate(
            { position: position },
            { $set: { isAttacked: true } },
            { new: true }
        );

        if (!result) {
            return res.status(404).json({ error: 'Posición no encontrada en el tablero.' });
        }

        res.status(200).json({ message: 'Posición actualizada correctamente', data: result });
    } catch (error) {
        console.error('Error al actualizar el tablero:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});

module.exports = router;

