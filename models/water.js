'use strict'
const{Model, DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    class Water extends Model{
        static associate(models) {
            Water.belongsTo(models.Usuario, { foreignKey: "usuarioFk", as: "usuario" });
        }
    }
    Water.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false
        },
        litrosTomadosDia: {
            type: DataTypes.DECIMAL,
            allowNull: false
        },
        usuarioFk: {
            type: DataTypes.UUID,
            allowNull: false,
            references: {
              model: "usuarios",
              key: "id",
            },
            onDelete: "CASCADE",
        }
    },{
        sequelize,
        modelName: 'water',
        tableName: 'waters',
        timestamps: false
    })
    return Water;
}