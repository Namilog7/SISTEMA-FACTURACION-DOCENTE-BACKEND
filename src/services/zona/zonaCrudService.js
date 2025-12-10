const { Institucion } = require("../../db");
const createBaseService = require("../createBaseService");

const zonaCrudService = (() => {
    const crud = createBaseService(Institucion);

    return {
        crearZona: (data) => crud.create(data),

        obtenerZonas: (where = {}) => crud.findAll(where),

        obtenerZonaPorId: (id) => crud.findById(id),

        actualizarZona: (id, data) => crud.update(id, data),

        eliminarZona: (id) => crud.delete(id),
    };
})();

module.exports = zonaCrudService;
