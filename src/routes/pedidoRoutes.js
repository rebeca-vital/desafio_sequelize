const express = require('express');
const router = express.Router();

const PedidoController = require('../controllers/pedidoControle');


router.post('/pedidos' , PedidoController.criar);
router.get('/pedidos' , PedidoController.listar);
router.get('/pedidos/:id' , PedidoController.buscarPorId);
router.put('/pedidos/:id' , PedidoController.atualizar);
router.delete('/pedidos/:id' , PedidoController.deletar);

module.exports = router;