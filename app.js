const express = require('express');
const datosRoutes = require('./routes/urls');
const app = express();
const port = 3000;

// Middleware para interpretar JSON en el cuerpo de las solicitudes
app.use(express.json());

app.use(express.static('public'));

app.use('/', datosRoutes);

app.use('/static', express.static('static'));

app.listen(port, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
