'use strict';

const { DataTypes } = require("sequelize");

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('editors', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      texto: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    })
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable('editors')
  }
};
