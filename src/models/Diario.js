const { Model, DataTypes,  } = require('sequelize');

class Diario extends Model {
    static init(sequelize) {
        super.init({
            titulocapa: DataTypes.STRING,
            subtitulocapa: DataTypes.STRING,
            imagemcapa: DataTypes.BLOB,
            instituicaocapa: DataTypes.STRING,
            tituloregis: DataTypes.STRING,
            dataregis: DataTypes.DATE,
            registo: DataTypes.STRING,
            imagemregis: DataTypes.BLOB,
            integrantesregis: DataTypes.STRING
        }, {
            sequelize
        })
    }
}

module.exports = Diario;