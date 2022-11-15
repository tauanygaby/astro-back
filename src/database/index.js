const Sequelize = require('sequelize');
const configBD = require('../config/bdconfig');
const Aluno = require('../models/Aluno');
const Checklist = require('../models/Checklist');
const Diario = require('../models/Diario');
const Editor = require('../models/Editor')

const conexao = new Sequelize(configBD);

Checklist.init(conexao);
Aluno.init(conexao);
Editor.init(conexao)
Diario.init(conexao);

module.exports = conexao;