import mysql from "mysql";

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "inventario",
});

connection.connect((err) => {
    if (err) {
        console.log("Error de conexión:", err);
    } else {
        console.log("Conexión correcta!");
    }
    connection.end();
});
