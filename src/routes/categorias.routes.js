import {Router} from "express";
import express from "express";
import { methodHTTP as categoriaController } from "../controllers/categorias.controllers.js";
import { obtenerCategorias } from "../controllers/categorias.controllers.js";

/* const router= Router();
 */

/* router.get("/",categoriaController.getCategorias )

 */
/* export default router;
 */

const router = express.Router();

router.get("/all",obtenerCategorias);

export default router;