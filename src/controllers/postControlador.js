const {Post} = require('../models/Post');

exports.crearPost = async (req, res) =>{
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
            enlace_imagen
        })

        res.redirect(`/posts/${nuevoPost.id}`);
    } catch(error){
        console.error(error);
        res.status(500).json({erorr: 'Error al crear el post.'});
    };
};

module.exports = exports;