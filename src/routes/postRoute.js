const express = require('express');
const router = express.Router();

// Importo el controlador del POST de los posts
const postControlador = require('../controllers/postControlador');

// Defino la ruta para el post
router.get('/crear-post', postControlador.mostrarFormularioCrearPost);
router.post('/crear-post', postControlador.crearPost)
// Ruta para procesar la creación de un nuevo post
module.exports = router;