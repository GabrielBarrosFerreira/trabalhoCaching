require('dotenv').config();
const express = require('express');
const createError = require('http-errors');
const morgan = require('morgan');
const clientesRoutes = require('./routes/clientes');
const produtosRoutes = require('./routes/produtos');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('API Backend II funcionando!');
});

app.use('/clientes', clientesRoutes);
app.use('/produtos', produtosRoutes);

app.use((req, res, next) => {
  next(createError(404, 'Rota não encontrada'));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({ erro: err.message });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
