/* ----- MYSQL YA NO SE USA -----

import mysql from "promise-mysql";
import config from "./../config.js";

const connection = mysql.createConnection({
    host : config.host,
    database : config.database,
    user : config.user,
    password : config.password
});

const getConnection = () => connection;

export default getConnection;

----- FIN MYSQL ----- */
import mongoose from "mongoose";

const conectarDB = async () => {
    try {
        const connectionDB = await mongoose.connect(process.env.MONGO_URI);
        const url = `CONECTADO A MONGODB EN SERVER (HOST): ${connectionDB.connection.host} EN PUERTO ${connectionDB.connection.port}`;
        console.log(url);
    } catch (error) {
        console.log(`${error.mensaje}`);
        process.exit(1);
    }
}

export default conectarDB;
