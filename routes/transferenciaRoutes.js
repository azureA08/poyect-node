const express = require('express');
const router = express.Router();
const transferenciaController = require('../controllers/transferenciaController');

router.post('/', transferenciaController.crearTransferencia);
router.get('/', transferenciaController.obtenerTransferencias);
router.get('/:id', transferenciaController.obtenerTransferenciaPorId);
router.put('/:id', transferenciaController.actualizarTransferencia);
router.delete('/:id', transferenciaController.eliminarTransferencia);

module.exports = router;
