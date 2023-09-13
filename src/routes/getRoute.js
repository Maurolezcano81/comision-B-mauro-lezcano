const express = require('express');
const router = express.Router();
const Post = require('../models/Post')

router.get('/', async (req, res) => {
    try {
      // Realiza una consulta a la base de datos para obtener los resultados
      const Posteos = await Post.findAll();
  
      // Renderiza la vista EJS y pasa los resultados como datos
      res.render('index', { Posteos });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al obtener los resultados.');
    }
  });
  

module.exports = router;

// Ruta para mostrar el formulario de creación de posts
