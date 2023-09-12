const express = require('express');
const cors = require('cors');
const app = express();
// Importacion de las rutas definidas en routes
const rutaPost = require('./src/routes/postRoute');

// Seteo el Template Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));



app.use(cors());


app.use('/', rutaPost);

// Correr el Servidor en el puerto 3000
app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
})