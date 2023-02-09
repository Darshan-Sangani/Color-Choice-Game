const { Sequelize } = require('sequelize')

const sequelize = new Sequelize("color_choice", "postgres", "root", {
    host: 'localhost',
    dialect: 'postgrers',
    logging: false
});

sequelize
    .authenticate()
    .then(() => console.log("database connected..."))
    .catch((error) => console.log(error));

sequelize.sync({ alter: true })

module.exports = sequelize

