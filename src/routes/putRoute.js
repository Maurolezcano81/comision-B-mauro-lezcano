const express = require('express');
const router = express.Router();

// Importo el controlador del update de los posts
const updateControllador = require('../controllers/updateControlador');

router.get('/actualizar/:id', updateControllador.mostrarFormularioEdicion);
router.post('/actualizar/post/:id', updateControllador.actualizarForo);

module.exports = router;