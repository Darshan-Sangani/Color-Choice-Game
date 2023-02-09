const { DataTypes } = require('sequelize')
const sequelize = require('../database/index')

const user = sequelize.define("user", {
    name: {
        type: DataTypes.STRING,
        allownull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allownull: false,
        unique: true
    },
    mobile: {
        type: DataTypes.STRING,
        allownull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allownull: false
    }
},
    {
        createdAt: "create_at",
        updatedAt: "update_at",
        freezeTableName: true,
    }
)

module.exports = user;