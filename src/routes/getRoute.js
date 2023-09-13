const express = require('express');
const router = express.Router();
const mostrarInicio = require('../controllers/getControlador');

router.get('/', mostrarInicio);

module.exports = router;
