const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "ItemLiquidacion",
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
            tipo: {
                type: DataTypes.ENUM("BRUTO", "RETENCION", "HABER NO REMUNERATIVO"),
                allowNull: false
            },
            formula: {
                type: DataTypes.STRING,
                allowNull: false
            }
        },
        { timestamps: false }
    );
};