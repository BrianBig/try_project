const connection = require('../config/db');

const obtenerDatos = (req, res) => {
    const sql = 'SELECT * FROM programa';
    connection.query(sql, (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Error en la consulta' });
            return;
        }
        res.json(results);
    });
};

// create program
const crearPrograma = (req, res) => {
    console.log(req.body);
    const { nombre_programa, estado, id_user } = req.body;
    if (!nombre_programa || !estado || !id_user) {
        return res.status(400).json({ error: 'Faltan datos en el cuerpo de la solicitud' });
    }

    const sql = 'INSERT INTO programa (nombre_programa, estado, id_user) VALUES (?, ?, ?)';
    connection.query(sql, [nombre_programa, estado, id_user], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al crear el programa' });
            return;
        }
        res.json({ message: 'Programa creado exitosamente' });
    });
};


// update program
const actualizarPrograma = (req, res) => {
    const { id } = req.params;
    const { nombre_programa, estado, id_user } = req.body;
    const sql = 'UPDATE programa SET nombre_programa = ?, estado = ?, id_user = ? WHERE id_programa = ?';
    connection.query(sql, [nombre_programa, estado, id_user, id], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al actualizar el programa' });
            return;
        }
        res.json({ message: 'Programa actualizado exitosamente' });
    });
};

// delete program
const eliminarPrograma = (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM programa WHERE id_programa = ?';
    connection.query(sql, [id], (error, results) => {
        if (error) {
            console.error(error);
            res.status(500).json({ error: 'Error al eliminar el programa' });
            return;
        }
        res.json({ message: 'Programa eliminado exitosamente' });
    });
};

module.exports = { obtenerDatos, crearPrograma, actualizarPrograma, eliminarPrograma };
