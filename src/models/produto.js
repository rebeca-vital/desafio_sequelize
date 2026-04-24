const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Produto = sequelize.define('Produto',{
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    estoque: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});
Produto.associate = (models) => {
    Produto.hasMany(models.Pedido, {
        foreignKey: 'produto_id'
    });
};
module.exports = Produto;