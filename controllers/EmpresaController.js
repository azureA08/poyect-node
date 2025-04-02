const Empresa = require('../models/empresa');

exports.crearEmpresa = async (req, res) => {
  try {
    const empresa = new Empresa(req.body);
    await empresa.save();
    res.status(201).json(empresa);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.obtenerEmpresas = async (req, res) => {
  try {
    const empresas = await Empresa.find();
    res.json(empresas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.obtenerEmpresaPorId = async (req, res) => {
  try {
    const empresa = await Empresa.findById(req.params.id);
    if (!empresa) {
      return res.status(404).json({ message: 'Empresa no encontrada' });
    }
    res.json(empresa);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.actualizarEmpresa = async (req, res) => {
  try {
    const empresa = await Empresa.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!empresa) {
      return res.status(404).json({ message: 'Empresa no encontrada' });
    }
    res.json(empresa);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.eliminarEmpresa = async (req, res) => {
  try {
    const empresa = await Empresa.findByIdAndDelete(req.params.id);
    if (!empresa) {
      return res.status(404).json({ message: 'Empresa no encontrada' });
    }
    res.json({ message: 'Empresa eliminada' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }};
