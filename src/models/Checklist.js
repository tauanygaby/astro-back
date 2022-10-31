const { Model, DataTypes } = require('sequelize');

class Checklist extends Model {
    static init(sequelize) {
        super.init({
            texto: DataTypes.STRING,
            descricao: DataTypes.STRING,
            data: DataTypes.DATE,
        }, {
            sequelize
        })
    }
}

module.exports = Checklist;