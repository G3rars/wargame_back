const mongoose = require('mongoose');

// Definición del esquema para el modelo de tablero
const tableroSchema = new mongoose.Schema({
    position: {
        type: String, // Puedes ajustar el tipo según el formato de tus posiciones
        required: true,
        unique: true
    },
    haveBase: {
        type: Boolean,
        default: false
    },
    hasAttacked: {
        type: Boolean,
        default: false
    }
});

// Definición del modelo de tablero utilizando el esquema definido anteriormente

const Tablero1 = mongoose.model('Tablero1', tableroSchema);

const Tablero2 = mongoose.model('Tablero2', tableroSchema);

module.exports = { Tablero1, Tablero2 };
