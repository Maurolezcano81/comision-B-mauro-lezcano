const express = require('express');
const router = express.Router();
const getControlador = require('../controllers/getControlador');

router.get('/', getControlador.mostrarInicio);

module.exports = router;
