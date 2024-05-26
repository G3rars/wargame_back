const connectToMongoDB = require('./connect'); // Importa la función para conectar a MongoDB

// Datos de ejemplo para la semilla
const seedData = [
    { A1: {
            haveBase: false,
            hasAttacked: false,
        } },
    { A2: {
            haveBase: false,
            hasAttacked: false,
        } },
    { A3: {
            haveBase: false,
            hasAttacked: false,
        } },
];

async function seed() {
    let client; // Declara la variable client fuera del bloque try

    try {
        // Conectar a la base de datos
        client = await connectToMongoDB();

        // Obtener la referencia a la colección de usuarios
        const collection = client.db().collection('tablero');

        // Insertar los datos de ejemplo en la colección
        const result = await collection.insertMany(seedData);
        console.log(`${result.insertedCount} documentos insertados`);

    } catch (error) {
        console.error('Error al insertar datos:', error);
    } finally {
        if (client) {
            // Cerrar la conexión a la base de datos si el cliente está definido
            client.close();
            console.log('Conexión cerrada');
        }
    }
}

module.exports = seed;
