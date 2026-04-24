const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Pedido = sequelize.define('Pedido',{
usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false
},
produto_id: {
    type: DataTypes.INTEGER,
    allowNull: false
},
quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false
}
});

module.exports = Pedido;