CREATE TABLE produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(255),
  descricao VARCHAR(255),
  preco DECIMAL(10, 2),
  data_atualizado DATETIME
);
