'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('diarios', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      titulocapa: {
        type: DataTypes.STRING,
      },

      subtitulocapa: {
        type: DataTypes.STRING,
      },

      imagemcapa: {
        type: DataTypes.STRING,
      },

      instituicaocapa: {
        type: DataTypes.STRING,
      },

      tituloregis: {
        type: DataTypes.STRING,
      },

      dataregis: {
        type: DataTypes.STRING,
      },

      registo: {
        type: DataTypes.STRING,
      },

      imagemregis: {
        type: DataTypes.BLOB,
      },

      integrantesregis: {
        type: DataTypes.STRING,
      },

    })
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('diarios')
  }
};
