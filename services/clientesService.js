const db = require('../configs/db');

const getAllClientes = async () => {
  const [rows] = await db.query('SELECT * FROM clientes');
  return rows;
};

const getClienteById = async (id) => {
  const [rows] = await db.query('SELECT * FROM clientes WHERE id = ?', [id]);
  return rows[0];
};

const createCliente = async (cliente) => {
  const { nome, sobrenome, email, idade } = cliente;
  const [result] = await db.query(
    'INSERT INTO clientes (nome, sobrenome, email, idade) VALUES (?, ?, ?, ?)',
    [nome, sobrenome, email, idade]
  );
  return { id: result.insertId, ...cliente };
};

const updateCliente = async (id, cliente) => {
  const { nome, sobrenome, email, idade } = cliente;
  await db.query(
    'UPDATE clientes SET nome = ?, sobrenome = ?, email = ?, idade = ? WHERE id = ?',
    [nome, sobrenome, email, idade, id]
  );
  return { id, ...cliente };
};

const deleteCliente = async (id) => {
  await db.query('DELETE FROM clientes WHERE id = ?', [id]);
  return { mensagem: 'Cliente removido' };
};

module.exports = {
  getAllClientes,
  getClienteById,
  createCliente,
  updateCliente,
  deleteCliente
};
