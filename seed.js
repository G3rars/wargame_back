const mongoose = require('mongoose');
const { Tablero1, Tablero2 } = require('./models/tableroModel.js');
const connectToMongoDB = require('./connect'); // Importa la función para conectar a MongoDB

// Datos de ejemplo para la semilla
const seedData = []

// Definir las letras que queremos incluir
const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

// Iterar sobre cada letra y número para crear las claves correspondientes
for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    for (let number = 1; number <= 6; number++) {
        seedData.push({
            position: letter + number,
            haveBase: false,
            hasAttacked: false
        });
    }
}

async function seed() {
    try {
        // Conectar a la base de datos
        await connectToMongoDB();

        // Insertar los datos de ejemplo en la colección utilizando los modelos de Mongoose
        const result1 = await Tablero1.insertMany(seedData);
        console.log(`${result1.length} documentos insertados en tablero1`);

        const result2 = await Tablero2.insertMany(seedData);
        console.log(`${result2.length} documentos insertados en tablero2`);
    } catch (error) {
        console.error('Error al insertar datos:', error);
    } finally {
        // Cerrar la conexión a la base de datos
        mongoose.connection.close();
        console.log('Conexión cerrada');
    }
}

module.exports = seed;
