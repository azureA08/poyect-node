const Transferencia = require('../models/transferencia');

exports.crearTransferencia = async (req, res) => {
  try {
    const transferencia = new Transferencia(req.body);
    await transferencia.save();
    res.status(201).json(transferencia);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.obtenerTransferencias = async (req, res) => {
  try {
    const transferencias = await Transferencia.find();
    res.json(transferencias);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.obtenerTransferenciaPorId = async (req, res) => {
  try {
    const transferencia = await Transferencia.findById(req.params.id);
    if (!transferencia) {
      return res.status(404).json({ message: 'Transferencia no encontrada' });
    }
    res.json(transferencia);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.actualizarTransferencia = async (req, res) => {
  try {
    const transferencia = await Transferencia.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!transferencia) {
      return res.status(404).json({ message: 'Transferencia no encontrada' });
    }
    res.json(transferencia);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }};

exports.eliminarTransferencia = async (req, res) => {

  try {
    const transferencia = await Transferencia.findByIdAndDelete(req.params.id);
    if (!transferencia) {
      return res.status(404).json({ message: 'Transferencia no encontrada' });
    }
    res.json({ message: 'Transferencia eliminada' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }};

