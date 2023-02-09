const { DataTypes } = require('sequelize')
const sequelize = require('../database/index')

const room = sequelize.define("room", {
    code: {
        type: DataTypes.STRING,
        allownull: false,
        unique: true
    },
    players: {
        type: DataTypes.STRING,
        defaultValue: 0
    },
},
    {
        createdAt: "create_at",
        updatedAt: "update_at",
        freezeTableName: true,
    }
)

module.exports = room;