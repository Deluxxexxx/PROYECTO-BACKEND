const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const RolePermission = sequelize.define('roles_permisos', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    rol_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'roles', key: 'id' },
        unique: true
    },
    permiso_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'permisos', key: 'id' },
        unique: true
    }
}, {
    timestamps: false,
    tableName: 'roles_permisos',
});

module.exports = RolePermission;