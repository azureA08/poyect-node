const mongoose = require('mongoose');

const transferenciaSchema = new mongoose.Schema({
  numero: { type: String, required: true, unique: true },
  empresa_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Empresa', required: true },
  cuenta: { type: String, required: true },
  importe: { type: Number, required: true },
  fechaTransferencia: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Transferencia', transferenciaSchema);

