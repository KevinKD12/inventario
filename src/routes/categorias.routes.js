import {Router} from "express";
import { methodHTTP as categoriaController } from "../controllers/categorias.controllers.js";

/* creamos el enrutador */
const router= Router();

/* get */
router.get("/",categoriaController.getCategorias )

/* hacemos disponible a router en td la app*/
export default router;