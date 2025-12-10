const { Institucion } = require("../../db");
const createBaseService = require("../createBaseService");

const institutionCrudService = () => {
    const crud = createBaseService(Institucion);

    return {
        crearInstitucion: (data) => crud.create(data),

        obtenerInstituciones: (where = {}) => crud.findAll(where),

        obtenerInstitucionPorId: (id) => crud.findById(id),

        actualizarInstitucion: (id, data) => crud.update(id, data),

        eliminarInstitucion: (id) => crud.delete(id),
    };
};

module.exports = institutionCrudService;
