const express = require('express');
const router = express.Router();

// Importo el controlador del POST de los posts
const postControlador = require('../controllers/postControlador');

// Defino la ruta para el post
router.post('/crear-Post', postControlador.crearPost);

module.exports = router;