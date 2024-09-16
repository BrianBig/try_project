const express = require('express');
const datosRoutes = require('./routes/urls');
const app = express();
const port = 3003;

app.use(express.json());

app.use('/', datosRoutes);

app.use(express.static('public'));
app.use('/static', express.static('static'));

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

module.exports = app;
