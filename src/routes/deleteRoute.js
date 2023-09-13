const express = require('express');
const router = express.Router();
const eliminarPost = require('../controllers/deleteControlador');

router.delete('/:id', eliminarPost);

module.exports = router;
