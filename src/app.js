require('dotenv').config();

const express = require('express');
const sequelize = require('./config/database');

const app = express();
app.use(express.json());

//ROTAS DO USUÁRIO
const usuarioRoutes = require('./routes/usuarioRoutes');
app.use(usuarioRoutes);

//ROTAS DO PRODUTO
const produtoRoutes = require('./routes/produtoRoutes');
app.use(produtoRoutes);

//ROTAS PEDIDO
const pedidoRoutes = require('./routes/pedidoRoutes');
app.use(pedidoRoutes);

//TESTE DE CONEXÃO COM BANCO
async function testConexao() {
  try{
    await sequelize.authenticate();
    await sequelize.sync();
    console.log('conexão com o banco ok!');
  }  catch(error){
    console.error('Erro ao conectar:' , error);
  }
}
testConexao();

//INICIAR SERVIDOR
app.listen(process.env.PORT, () =>{
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});

