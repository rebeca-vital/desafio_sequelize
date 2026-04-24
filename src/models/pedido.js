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
Pedido.associate = (models) => {
    Pedido.belongsTo(models.Usuario, {
        foreignKey: 'usuario_id'
    });
    Pedido.belongsTo(models.Produto, {
        foreignKey: 'produto_id'
    });
};

module.exports = Pedido;