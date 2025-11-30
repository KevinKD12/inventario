/* imnportamos al framework express */
import express from "express";
import cors from "cors"
import categoriaRoutes from "./routes/categorias.routes.js"

/* asignamos la app toda la funcionalidad para mi server web */
const app = express();

app.use(cors());

/* setear un puerto */
app.set("port",4000)

/* routes */
app.use("/api/categorias",categoriaRoutes)
/* se exporta para hacer disponible la app  */
export default app;

