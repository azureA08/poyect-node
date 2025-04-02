const EmpresaTransferencia = require('../models/empresaTransferencia');

exports.crearEmpresaTransferencia = async (req, res) => {

  try {
    const empresaTransferencia = new EmpresaTransferencia(req.body);
    await empresaTransferencia.save();
    res.status(201).json(empresaTransferencia);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }};

exports.obtenerEmpresasTransferencias = async (req, res) => {
  try {
    const empresasTransferencias = await EmpresaTransferencia.find();
    res.json(empresasTransferencias);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.obtenerEmpresaTransferenciaPorId = async (req, res) => {
  try {
    const empresaTransferencia = await EmpresaTransferencia.findById(req.params.id);
    if (!empresaTransferencia) {
      return res.status(404).json({ message: 'EmpresaTransferencia no encontrada' });
    }
    res.json(empresaTransferencia);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.actualizarEmpresaTransferencia = async (req, res) => {
  try {
    const empresaTransferencia = await EmpresaTransferencia.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!empresaTransferencia) {
      return res.status(404).json({ message: 'EmpresaTransferencia no encontrada' });
    }
    res.json(empresaTransferencia);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.eliminarEmpresaTransferencia = async (req, res) => {
  try {
    const empresaTransferencia = await EmpresaTransferencia.findByIdAndDelete(req.params.id);
    if (!empresaTransferencia) {
      return res.status(404).json({ message: 'EmpresaTransferencia no encontrada' });
    }
    res.json({ message: 'EmpresaTransferencia eliminada' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
