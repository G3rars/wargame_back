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
 * /tablero/cambiarBase:
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
 *                 description: Coordenada para instalar base (e.g., "A2")
 *     responses:
 *       200:
 *         description: Esto debe intalar una base.
 *       500:
 *         description: Error de servidor.   
 */

router.patch('/cambiarBase', async (req, res) => {
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

        // Primero, encuentra el documento para obtener el valor actual de haveBase
        const currentDocument = await model.findOne({ position: position });
        if (!currentDocument) {
            return res.status(404).json({ error: 'Posición no encontrada en el tablero.' });
        }

        const currentHaveBase = currentDocument.haveBase;

        // Luego, alterna el valor de haveBase
        const result = await model.findOneAndUpdate(
            { position: position },
            { $set: { haveBase: !currentHaveBase } }, 
            { new: true }
        );

        res.status(200).json({ message: 'Base instalada correctamente', data: result });
    } catch (error) {
        console.error('Error al actualizar el tablero:', error);
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

