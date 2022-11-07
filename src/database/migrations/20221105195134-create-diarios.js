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
      tituloCapa: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      subtituloCapa: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      imagemCapa: {
        type: DataTypes.BLOB,
        allowNull: true,
      },

      integrantesCapa: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      instituicaoCapa: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      tituloRegis: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dataRegis: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      horaRegis: {
        type: DataTypes.TIME,
        allowNull: true,
      },

      registro: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      integrantesRegis: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imagemRegis: {
        type: DataTypes.BLOB,
        allowNull: true,
      },

      
    })
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('diarios')
  }
};
