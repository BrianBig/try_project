const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '154.56.48.204',  // Dirección IP sin el puerto
    user: 'u300220289_adm_pablo',
    password: 'Hola_123*321',
    database: 'u300220289_diego_db',
    port: 3006  // Puerto en una propiedad separada
});

connection.connect((err) => {
    if (err) {
        console.error('Error conectando a la base de datos: ' + err.stack);
        return;
    }
    console.log('Conectado como id ' + connection.threadId);
});

module.exports = connection;
