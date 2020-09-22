import mongoose from 'mongoose';

const connection = {};

async function dbConnect() {
    try {
        if (connection.isConnected) {
            return;
        }

        const db = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        connection.isConnected = db.connections[0].readyState;

        console.log(connection.isConnected);
    }catch (e) {
        console.log(e);
        process.exit(1);
    }
}

export default dbConnect;