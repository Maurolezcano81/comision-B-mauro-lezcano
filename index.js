const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

// Para poder usar js y css custom
app.use(express.static('public'));

// Importacion de las rutas definidas en routes
const rutaPost = require('./src/routes/postRoute');
const rutaGet = require('./src/routes/getRoute');
const rutaDelete = require('./src/routes/deleteRoute');
const rutaUpdate = require('./src/routes/putRoute');
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// Seteo el Template Engine
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/src/views'));

// Para poder realizar las peticiones http
app.use(cors());

// Para poder leer los datos
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas
app.use('/', rutaPost);
app.use('/', rutaGet);
app.use('/:id', rutaDelete);
app.use('/', rutaUpdate);

// Correr el Servidor en el puerto 3000
app.listen(3000, () => {
    console.log(`Servidor corriendo en el puerto 3000`);
})