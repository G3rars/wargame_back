const connectToMongoDB = require('./connect'); // Importa la función para conectar a MongoDB

// Datos de ejemplo para la semilla
const seedData = [];

// Definir las letras que queremos incluir
const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

// Iterar sobre cada letra y número para crear las claves correspondientes
for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    for (let number = 1; number <= 6; number++) {
        const key = letter + number;
        const obj = {
            [key]: {
                haveBase: false,
                hasAttacked: false
            }
        };
        seedData.push(obj);
    }
}

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
