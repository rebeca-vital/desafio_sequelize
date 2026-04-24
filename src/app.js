const express = require('express');
const sequelize = require('./config/database');

require('dotenv').config();

const app = express();
app.use(express.json());

async function testConexao() {
  try{
    await sequelize.authenticate();
    console.log('conexão com o banco ok!');
  }  catch(error){
    console.error('Erro ao conectar:' , error);
  }
}
testConexao();

app.listen(process.env.PORT, () =>{
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});