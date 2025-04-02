const express = require('express');
const router = express.Router();
const empresaController = require('../controllers/empresaController');

/**
 * @swagger
 * /empresa
 * post:
 * summary: Crea una nueva empresa.
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * properties:
 * razonSocial:
 * type: string
 * cuit:
 * type: string
 * responses:
 * 201:
 * description: Empresa creada con éxito.
 * 400:
 * description: Error en la solicitud.
 */
router.post('/', empresaController.crearEmpresa);
router.get('/', empresaController.obtenerEmpresas);
router.get('/:id', empresaController.obtenerEmpresaPorId);
router.put('/:id', empresaController.actualizarEmpresa);
router.delete('/:id', empresaController.eliminarEmpresa);

module.exports = router;