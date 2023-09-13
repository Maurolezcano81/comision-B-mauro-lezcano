const Post = require('../models/Post');

const mostrarInicio = async (req, res) => {
    try {
      // Realiza una consulta a la base de datos para obtener los resultados
      const Posteos = await Post.findAll();
      res.render('index', { Posteos });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error al obtener los resultados.');
    }
}



module.exports = {mostrarInicio};