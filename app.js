const express = require('express');
const datosRoutes = require('./routes/urls');
const app = express();
const port = 3004;

app.use(express.json());

app.use('/', datosRoutes);

app.use(express.static('public'));
app.use('/static', express.static('static'));

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor corriendo en http://0.0.0.0:${PORT}`);
});


module.exports = app;
