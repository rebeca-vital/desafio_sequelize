const Produto = require('../models/produto');
const { criar, buscarPorId, atualizar, deletar } = require('./usuarioControle');

module.exports = {
    async criar(req, res){
        const produto = await Produto.create(req.body);
        return res.json(produto);
    },
    async listar(req, res){
        const produtos = await Produto.findAll();
        return res.json(produtos);
    },
    async buscarPorId(req, res){
        const produto = await Produto.findByPk(req.params.id);
        return res.json(produto);
    },
    async atualizar(req, res){
        await Produto.update(req.body, {
            where: { id: req.params.id }
        });
        return res.json({ message: "Produto Atualizado com sucesso"});
    },
    async deletar(req, res){
        await Produto.destroy({
            where: { id: req.params.id }
        });
        return res.json({ message: "Produto deletado com sucesso"})
    }
};