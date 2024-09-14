const express = require('express');
const router = express.Router();
const get_data = require('../controllers/get_data');

// Rutas para manejar solicitudes
router.get('/getData', get_data.obtenerDatos);
router.post('/addData', get_data.crearPrograma);
router.put('/updateData/:id', get_data.actualizarPrograma);
router.delete('/deleteData/:id', get_data.eliminarPrograma);

module.exports = router;
