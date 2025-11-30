/* import getConnection from "./../db/database.js";

const getCategorias = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query(
            "SELECT CategoriaID, CategoriaNombre, Descripcion, Imagen FROM categorias"
        );
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error en el servidor" });
    }
};

export const methodHTTP = {
    getCategorias
};
 */



const getCategorias = async (req, res) => {
    try {
        res.json({ mensaje: "Controlador de categorías funcionando correctamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error en el servidor" });
    }
};

export const methodHTTP = {
    getCategorias
};
