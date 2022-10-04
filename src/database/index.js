const Sequelize = require('sequelize');
const configBD = require('../config/bdconfig');
const Aluno = require('../models/Aluno');

const conexao = new Sequelize(configBD);

Aluno.init(conexao);

module.exports = conexao;