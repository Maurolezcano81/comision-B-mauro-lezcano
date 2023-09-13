const Post = require('../models/Post');
const eliminarPost = async (req, res) => {
    try {
        const { id } = req.params; // Captura el ID del parámetro de la URL
        await Post.destroy({
            where: {
                id
            }
        });
        res.send({message : 'Post eliminado'});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar el post.' });
    }
}

module.exports = eliminarPost;