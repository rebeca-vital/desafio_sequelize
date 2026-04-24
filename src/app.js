require('dotenv').config();

const express = require('express');
const sequelize = require('./config/database');

const app = express();
app.use(express.json());
//IMPORTAR MODELS
const Usuario = require('./models/usuario');
const Produto = require('./models/produto');
const Pedido = require('./models/pedido');
//ATIVAR RELACIONAMENTOS
 Usuario.associate({ Pedido });
 Produto.associate({ Pedido });
 Pedido.associate({ Usuario, Produto });


//ROTAS
const usuarioRoutes = require('./routes/usuarioRoutes');
app.use(usuarioRoutes);
const produtoRoutes = require('./routes/produtoRoutes');
app.use(produtoRoutes);
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

