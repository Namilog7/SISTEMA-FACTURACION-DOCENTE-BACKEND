const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_DEPLOY, DB_DEV } = process.env;
const pg = require("pg");

const sequelize = new Sequelize(DB_DEV, {
    logging: false,
    native: false,
    dialectModule: pg,
    /*    dialect: "postgres",
       dialectOptions: {
           ssl: {
               require: true,
               rejectUnauthorized: false,
           },
       }, */
});

// Obtención del nombre del archivo actual
const basename = path.basename(__filename);

// Inicialización de un array para almacenar definiciones de modelos
const modelDefiners = [];

// Lectura de archivos en el directorio 'models' y carga de definiciones de modelos en el array
fs.readdirSync(path.join(__dirname, "/models"))
    .filter((file) => file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js")
    .forEach((file) => {
        modelDefiners.push(require(path.join(__dirname, "/models", file)));
    });

// Aplicación de cada definicion de modelo en la instancia de Sequelize
modelDefiners.forEach((model) => model(sequelize));

// Conversion de los nombres de modelos a formato capitalizado
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

const {
    Docente,
    Institucion,
    ItemLiquidacion,
    Zona
    // los modelos
} = sequelize.models


// Institucion Docente (muchos a muchos)
Institucion.belongsToMany(Docente, { through: "InstitucionDocente" });
Docente.belongsToMany(Institucion, { through: "InstitucionDocente" });

// Zona Institucion (uno a muchos)
Zona.hasMany(Institucion, { foreignKey: "id_zona" });
Institucion.belongsTo(Zona, { foreignKey: "id_zona" });

// Docente ItemLiquidacion (muchos a muchos)
Docente.belongsToMany(ItemLiquidacion, { through: "DocenteItemLiquidacion" });
ItemLiquidacion.belongsToMany(Docente, { through: "DocenteItemLiquidacion" });



module.exports = {
    ...sequelize.models,
    conn: sequelize,
};
