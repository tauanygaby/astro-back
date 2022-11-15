const { Model, DataTypes } = require('sequelize');

class Aluno extends Model {
    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            nickname: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
            instituicao: DataTypes.STRING,
            idequipe: DataTypes.INTEGER,
            fotouser: DataTypes.BLOB
        }, {
            sequelize
        })
    }
}

module.exports = Aluno;