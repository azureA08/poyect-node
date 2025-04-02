const mongoose = require('mongoose');

const empresaSchema = new mongoose.Schema({
  razonSocial: { type: String, required: true },
  cuit: { type: String, required: true, unique: true },
  fechaAdhesion: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Empresa', empresaSchema);
