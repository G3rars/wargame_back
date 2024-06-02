const mongoose = require('mongoose');

async function connectToMongoDB() {
    const uri = "mongodb+srv://root:5T0cKUMqqF9Um77F@cluster0.zrgspwy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

    try {
        await mongoose.connect(uri, {});
        console.log("Conexión exitosa a MongoDB!");
    } catch (error) {
        console.error("Error al conectar a MongoDB:", error);
        throw error;
    }
}

module.exports = connectToMongoDB;