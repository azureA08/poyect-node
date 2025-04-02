const express = require('express');
const router = express.Router();
const empresaTransferenciaController = require('../controllers/empresaTransferenciaController');

router.post('/', empresaTransferenciaController.crearEmpresaTransferencia);
router.get('/', empresaTransferenciaController.obtenerEmpresasTransferencias);
router.get('/:id', empresaTransferenciaController.obtenerEmpresaTransferenciaPorId);
router.put('/:id', empresaTransferenciaController.actualizarEmpresaTransferencia);
router.delete('/:id', empresaTransferenciaController.eliminarEmpresaTransferencia);

module.exports = router;

