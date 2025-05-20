const service = require('../services/clientesService');
const { clearCache } = require('../middlewares/cache');

exports.getAll = async (req, res, next) => {
  try {
    const clientes = await service.getAllClientes();
    res.json(clientes);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const cliente = await service.createCliente(req.body);
    clearCache();
    res.status(201).json(cliente);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const cliente = await service.updateCliente(req.params.id, req.body);
    clearCache();
    res.json(cliente);
  } catch (err) {
    next(err);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const msg = await service.deleteCliente(req.params.id);
    clearCache();
    res.json(msg);
  } catch (err) {
    next(err);
  }
};
