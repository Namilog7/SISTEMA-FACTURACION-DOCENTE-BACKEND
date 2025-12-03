const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "Zona",
        {
            id: {
                type: DataTypes.UUID,
                primaryKey: true,
                defaultValue: DataTypes.UUIDV4,
            },
            letra: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            porcentaje: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        { timestamps: false }
    );
};