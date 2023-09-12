exports.mostrarDetallePost = async (req, res) => {
    try {
      const post = await Post.findOne({ where: { id: req.params.id } });
  
      if (!post) {
        return res.status(404).json({ error: 'Post no encontrado.' });
      }
  
      res.render('postDetalle', { post });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al mostrar el post.' });
    }
  };

  module.exports = exports;