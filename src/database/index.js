const Sequelize = require('sequelize');
const configBD = require('../config/bdconfig');
const Aluno = require('../models/Aluno');
const Checklist = require('../models/Checklist');

const conexao = new Sequelize(configBD);

Checklist.init(conexao);
Aluno.init(conexao);

module.exports = conexao;