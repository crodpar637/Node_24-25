// platoRoutes.js
const express = require('express');
const router = express.Router();
const platoController = require('../controllers/platoController');

router.get('/', platoController.getAllPlato);
router.post('/', platoController.createPlato);
router.delete('/:idplato', platoController.deletePlato);
// router.get('/:idtipo', tipoController.getTipoById);

// router.put('/:idtipo', tipoController.updateTipo);


module.exports = router;
