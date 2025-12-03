const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define(
        "Docente",
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
            apellido: {
                type: DataTypes.STRING,
                allowNull: false
            },
            numero_boleta: {
                type: DataTypes.STRING(20),
                allowNull: false
            },
            caracter: {
                type: DataTypes.STRING,
                allowNull: false
            },
            fecha_ingreso: {
                type: DataTypes.DATE,
                allowNull: false
            },
            antiguedad: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            escalafon: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            cargo: {
                type: DataTypes.FLOAT,
                allowNull: false
            },
            horas: {
                type: DataTypes.SMALLINT,
                allowNull: false
            },
            puntos: {
                type: DataTypes.SMALLINT,
                allowNull: false
            },
            sueldo_basico: {
                type: DataTypes.FLOAT,
                allowNull: true
            },
            bruto_remunerativo: {
                type: DataTypes.FLOAT,
                allowNull: true
            },
            retenciones: {
                type: DataTypes.FLOAT,
                allowNull: true
            },
            no_remunerativo: {
                type: DataTypes.FLOAT,
                allowNull: true
            },
            liquidacion: {
                type: DataTypes.FLOAT,
                allowNull: true
            },
        },
        { timestamps: false }
    );
};