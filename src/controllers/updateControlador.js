const Post = require('../models/Post');

const mostrarFormularioEdicion = async (req, res) => {
    try {
        const postId = req.params.id;
                const posteo = await Post.findByPk(postId);

        if (!posteo) {
            // Maneja el caso en el que el posteo no se encuentre
            return res.status(404).send('Posteo no encontrado');
        }
        
        res.render('actualizarPost', {posteo});
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al mostrar el formulario de edición.');
    }
}

const actualizarForo = async (req, res) => {
    try {
        const { id } = req.params;
        const { titulo, contenido, enlace_imagen} = req.body;
        await Post.update(
            { titulo, contenido, enlace_imagen },
            { where: { id } }
        );

        res.redirect('/');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al actualizar el foro.');
    }
}

module.exports = {
    mostrarFormularioEdicion,
    actualizarForo
};
