// tipoRoutes.js
const express = require('express');
const router = express.Router();
const tipoController = require('../controllers/tipoController');

router.get('/', tipoController.getAllTipo);
router.get('/:idtipo', tipoController.getTipoById);
router.post('/', tipoController.createTipo);
router.put('/:idtipo', tipoController.updateTipo);
router.delete('/:idtipo', tipoController.deleteTipo);

module.exports = router;
