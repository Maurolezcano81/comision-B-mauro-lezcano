const Post = require('../models/Post');
function mostrarFormularioCrearPost(req, res) {
    res.render('crearPost');
  }

const crearPost = async (req, res) =>{
    try{
        const {titulo, contenido, enlace_imagen} = req.body;
        // Compruebo si falta titulo o contenido
        if(!titulo || !contenido){
            return res.status(400).json({error: 'Faltan datos'}); 
        };

        // Creo un nuevo Post
        const nuevoPost = await Post.create({
            titulo,
            contenido,
            enlace_imagen,
        });
      
          res.redirect('/');
        } catch(error){
        console.error(error);
        res.status(500).json({erorr: 'Error al crear el post.'});
    };
};

module.exports = {
    crearPost,
    mostrarFormularioCrearPost
};