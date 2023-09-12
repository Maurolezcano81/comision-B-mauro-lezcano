const express = require('express');
const router = express.router();

// Ruta para mostrar el formulario de creación de posts
router.get('/crear-post', postController.mostrarFormularioCrearPost);
