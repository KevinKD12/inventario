/* imnportamos al framework express */
import express from "express";

/* asignamos la app toda la funcionalidad para mi server web */
const app = express();

/* setear un puerto */
app.set("port",5000)

/* se exporta para hacer disponible la app  */
export default app;