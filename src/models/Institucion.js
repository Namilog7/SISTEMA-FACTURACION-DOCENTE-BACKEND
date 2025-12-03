const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "Institucion",
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },
            nombre: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            domicilio: {
                type: DataTypes.STRING,
                allowNull: false
            },
            cuil: {
                type: DataTypes.STRING,
                allowNull: false
            },
            nivel: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        { timestamps: false }
    );
};