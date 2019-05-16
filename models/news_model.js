const Sequelize = require('sequelize');
const sequelize = require ("../config/database");

class News extends Sequelize.Model {}
News.init({
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content:{
        type:Sequelize.TEXT,
        allowNull: false
    }

}, {sequelize});

module.exports = News;