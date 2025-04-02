const mongoose = require('mongoose');

const empresaTransferenciaSchema = new mongoose.Schema({
  empresa_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Empresa', required: true },
  cuit: { type: String, required: true },
});

module.exports = mongoose.model('EmpresaTransferencia', empresaTransferenciaSchema);

