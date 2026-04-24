const Pedido = require('../models/pedido');
const { where } = require('sequelize');

module.exports = {
    async criar(req, res){
        const pedido = await Pedido.create(req.body);
        return res.json(pedido);
    },
    async listar(req, res){
        const pedidos = await Pedido.findAll();
        return res.json(pedidos);
    },
    async buscarPorId(req, res){
        const pedido = await Pedido.findByPk(req.params.id);
        return res.json(pedido);
    },
    async atualizar(req, res){
        await Pedido.update(req.body, {
            where: { id: req.params.id }
        });
        return res.json({ message: "Pedido Atualizado com sucesso"});
    },
    async deletar(req, res){
        await Pedido.destroy({
            where: { id: req.params.id }
        });
        return res.json({ message: "Pedido deletado com sucesso"})
    }
};