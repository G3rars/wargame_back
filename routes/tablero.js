const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Modelos de mongoose, asegúrate de haberlos definido correctamente
const { Tablero1, Tablero2 } = require('../models/tableroModel.js');

/**
 * @swagger
 * /tablero/obtener:
 *   get:
 *     summary: Obtienes el tablero.
 *     description: Trae la informacion para poder pintar el tablero.
 *     parameters:
 *       - in: query
 *         name: numero
 *         schema:
 *           type: integer
 *         description: El número del tablero que se quiere obtener (1 o 2).
 *     responses:
 *       200:
 *         description: Informacion de tablero.
 *       404:
 *         description: Tablero no encontrado. 
 *       500:
 *         description: Error de servidor.   
 */

/* GET tablero. */
router.get('/obtener', async (req, res) => {
    const { numero } = req.query;

    try {
        // Seleccionar el modelo de tablero según el parámetro de consulta
        let tablero;
        if (numero === '1') {
            tablero = await Tablero1.find();
        } else if (numero === '2') {
            tablero = await Tablero2.find();
        } else {
            return res.status(400).json({ error: 'Número de tablero no válido. Use 1 o 2.' });
        }
        // Devuelve los datos obtenidos en formato JSON
        res.status(200).json(tablero);
    } catch (error) {
        // Si ocurre algún error, devuelve un código de error 500
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});


/**
 * @swagger
 * /api/tablero/crear:
 *   patch:
 *     summary: Creacion de tablero
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

router.patch('tablero/crear', function (req, res) {
    const ataque = "Es un ataque";
    res.status(200).json({ message: ataque });
});

module.exports = router;

