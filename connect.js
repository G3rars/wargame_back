const { MongoClient, ServerApiVersion } = require('mongodb');

async function connectToMongoDB() {
    const uri = "mongodb+srv://root:5T0cKUMqqF9Um77F@cluster0.zrgspwy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
        }
    });

    try {
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Conexión exitosa a MongoDB!");
        return client;
    } catch (error) {
        console.error("Error al conectar a MongoDB:", error);
        throw error;
    }
}

module.exports = connectToMongoDB;
