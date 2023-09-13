const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
app.use(express.static('public'));
// Importacion de las rutas definidas en routes
const rutaPost = require('./src/routes/postRoute');
const rutaGet = require('./src/routes/getRoute');
const rutaDelete = require('./src/routes/deleteRoute');

// Seteo el Template Engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/src/views'));

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', rutaPost);
app.use('/', rutaGet);
app.use('/:id', rutaDelete);

// Correr el Servidor en el puerto 3000
app.listen(3000, () => {
    console.log(`Servidor corriendo en el puerto 3000`);
})