const Usuario = require('../models/usuario');
const { where } = require('sequelize');

module.exports = {
    async criar(req, res){
        const usuario = await Usuario.create(req.body);
        return res.json(usuario);
    },
    async listar(req, res){
        const usuarios = await Usuario.findAll();
        return res.json(usuarios);
    },
    async buscarPorId(req, res){
        const usuario = await Usuario.findBYPK(req.params.id);
        return res.json(usuario);
    },
    async atualizar(req, res){
        await Usuario.update(req.body, {
            where: { id: req.params.id }
        });
        return res.json({ message: "Atualizado com sucesso" });
    },
    async deletar(req, res){
        await Usuario.destroy({
            where: { id: req.params.id }
        });
        return res.json({ message: "Deletado com sucesso" });
    }
};