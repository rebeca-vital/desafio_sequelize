const Pedido = require('../models/pedido');
const Usuario = require('../models/usuario');
const Produto = require('../models/produto');

module.exports = {
    async criar(req, res){
        try{
        const pedido = await Pedido.create(req.body);
        return res.json(pedido);
    } catch(error){
        return res.status(500).json({ error: error.message });
    }
   },
    async listar(req, res){
        try{
        const pedidos = await Pedido.findAll({
            include: [Usuario, Produto]
        });
        return res.json(pedidos);
    }catch(error){
        return res.status(500).json({ error: error.message });
    }
    },
    async buscarPorId(req, res){
        try{
        const pedido = await Pedido.findByPk(req.params.id, {
            include: [Usuario, Produto]
        });
        return res.json(pedido);
    }catch (error){
        return res.status(500).json({ error: error.message });
    }
    },

    async atualizar(req, res){
        try{
        await Pedido.update(req.body, {
            where: { id: req.params.id }
        });
        return res.json({ message: "Pedido Atualizado com sucesso"});
    }catch (error){
        return res.status(500).json({ error: error.message});
    }
    },
    async deletar(req, res){
        try{
        await Pedido.destroy({
            where: { id: req.params.id }
        });
        return res.json({ message: "Pedido deletado com sucesso"})
    }catch(error){
        return res.status(500).json({ error: error.message});
    }
}
};