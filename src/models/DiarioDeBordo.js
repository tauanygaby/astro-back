const { Model, DataTypes } = require('sequelize');

class DiarioDeBordo extends Model {
    static init(sequelize) {
        super.init({
            tituloCapa: DataTypes.STRING,
            subtituloCapa: DataTypes.STRING,
            integrantesCapa: DataTypes.STRING,
            instituicaoCapa: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = DiarioDeBordo;