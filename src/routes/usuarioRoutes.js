const express = require('express');
const router = express.Router();

const UsuarioController = require('../controllers/usuarioControle');
const usuarioControle = require('../controllers/usuarioControle');

router.post('/usuarios' , UsuarioController.criar);
router.get('/usuarios' , UsuarioController.listar);
router.get('/usuarios' , usuarioControle.buscarPorId);
router.put('/usuarios' , usuarioControle.atualizar);
router.delete('/usuarios' , usuarioControle.deletar);

module.exports = router;