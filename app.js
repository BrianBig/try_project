const express = require('express');
const datosRoutes = require('./routes/urls');
const app = express();
const port = 3003;

// Middleware para interpretar JSON en el cuerpo de las solicitudes
app.use(express.json());

// Configuración de las rutas
app.use('/', datosRoutes);

// Configuración de archivos estáticos
app.use(express.static('public'));
app.use('/static', express.static('static'));

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

module.exports = app;
