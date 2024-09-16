const express = require('express'); 
const datosRoutes = require('./routes/urls');
const app = express();
const port = 3004; // Aquí defines "port", no "PORT"

app.use(express.json());

app.use('/', datosRoutes);

app.use(express.static('public'));
app.use('/static', express.static('static'));

// Cambia "PORT" por "port" en la función app.listen
app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor corriendo en http://0.0.0.0:${port}`);
});

module.exports = app;
