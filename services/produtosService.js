const db = require('../configs/db');

const getAllProdutos = async () => {
  const [rows] = await db.query('SELECT * FROM produtos');
  return rows;
};

const getProdutoById = async (id) => {
  const [rows] = await db.query('SELECT * FROM produtos WHERE id = ?', [id]);
  return rows[0];
};

const createProduto = async (produto) => {
  const { nome, descricao, preco } = produto;
  const data_atualizado = new Date();
  const [result] = await db.query(
    'INSERT INTO produtos (nome, descricao, preco, data_atualizado) VALUES (?, ?, ?, ?)',
    [nome, descricao, preco, data_atualizado]
  );
  return { id: result.insertId, ...produto, data_atualizado };
};

const updateProduto = async (id, produto) => {
  const { nome, descricao, preco } = produto;
  const data_atualizado = new Date();
  await db.query(
    'UPDATE produtos SET nome = ?, descricao = ?, preco = ?, data_atualizado = ? WHERE id = ?',
    [nome, descricao, preco, data_atualizado, id]
  );
  return { id, ...produto, data_atualizado };
};

const deleteProduto = async (id) => {
  await db.query('DELETE FROM produtos WHERE id = ?', [id]);
  return { mensagem: 'Produto removido' };
};

module.exports = {
  getAllProdutos,
  getProdutoById,
  createProduto,
  updateProduto,
  deleteProduto
};
