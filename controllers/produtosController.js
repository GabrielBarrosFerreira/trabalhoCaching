const service = require('../services/produtosService');

exports.getAll = async (req, res, next) => {
  try {
    const produtos = await service.getAllProdutos();
    res.json(produtos);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const produto = await service.createProduto(req.body);
    res.status(201).json(produto);
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const produto = await service.updateProduto(req.params.id, req.body);
    res.json(produto);
  } catch (err) {
    next(err);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const msg = await service.deleteProduto(req.params.id);
    res.json(msg);
  } catch (err) {
    next(err);
  }
};
