const { Model, DataTypes } = require('sequelize');

class Checklist extends Model {
    static init(sequelize) {
        super.init({
            texto: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Checklist;