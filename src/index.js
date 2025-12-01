/* import app from "./app.js";

const main = () => {
    app.listen(app.get("port"));
    console.log(`
The company's  Super web server is running on port ${app.get("port")}`
    );
}

main();

 */

import express from "express";
import dotenv from "dotenv";
import conectarDB from "./config/config.js";
import categoriaRouter from "./routes/categorias.routes.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT;

conectarDB();

/* app.use("/api/categorias", categoriaRoutes);
 */
app.use("/categoria", categoriaRouter);


app.listen(PORT, () =>{
    console.log(`super servidor corriendo en el puerto ${PORT}`);
});

