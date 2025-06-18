const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db'); // Importa la instanciade sequelize
const Proveedor = sequelize.define('Proveedor', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'proveedores',
    timestamps: false,
});

module.exports = Proveedor;