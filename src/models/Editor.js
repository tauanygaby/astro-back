const { Model, DataTypes } = require('sequelize');

class Editor extends Model {
    static init(sequelize) {
        super.init({
            texto: DataTypes.STRING,
        }, {
            sequelize
        })
    }
}

module.exports = Editor;