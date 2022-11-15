'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('alunos', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nickname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      senha: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      instituicao: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      idequipe: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      fotouser: {
        type: DataTypes.BLOB,
        allowNull: true,
      }
    })
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('alunos')
  }
};
