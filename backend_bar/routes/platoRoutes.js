// platoRoutes.js
const express = require('express');
const router = express.Router();
const platoController = require('../controllers/platoController');

router.get('/', platoController.getAllPlato);
router.post('/', platoController.createPlato);
// router.get('/:idtipo', tipoController.getTipoById);

// router.put('/:idtipo', tipoController.updateTipo);
// router.delete('/:idtipo', tipoController.deleteTipo);

module.exports = router;
