'use strict'
const {Model, DataTypes} = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize) => {
    class Usuario extends Model{
        async validarPassword(password){
            return await bcrypt.compare(password, this.password);
        }
    }
    Usuario.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        nombreCompleto: {
            type: DataTypes.STRING,
            allowNull: false
        },
        nombreUsuario: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        estado: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Activo"
        }
    },{
        sequelize,
        modelName: 'usuario',
        tableName: 'usuarios',
        timestamps: false,

        hooks: {
            beforeCreate: async(usuario) =>{
                const salt = await bcrypt.genSalt(10);
                usuario.password = await bcrypt.hash(usuario.password, salt);
            }
        }
    });
    return Usuario;
}