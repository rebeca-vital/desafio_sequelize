const express = require('express');
const router = express.Router();

const ProdutoController = require('../controllers/produtoControle');


router.post('/produtos' , ProdutoController.criar);
router.get('/produtos' , ProdutoController.listar);
router.get('/produtos/:id' , ProdutoController.buscarPorId);
router.put('/produtos/:id' , ProdutoController.atualizar);
router.delete('/produtos/:id' , ProdutoController.deletar);

module.exports = router;