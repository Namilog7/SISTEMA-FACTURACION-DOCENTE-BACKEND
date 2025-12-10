const createBaseService = require("../createBaseService");
const { Docente } = require("../../db");

const docenteCrudService = (model = Docente) => {
    const crud = createBaseService(model);

    return {
        crearDocente: (data) => crud.create(data),

        obtenerDocentes: (where = {}) => crud.findAll(where),

        obtenerDocentePorId: (id) => crud.findById(id),

        actualizarDocente: (id, data) => crud.update(id, data),

        eliminarDocente: (id) => crud.delete(id),
    };
};

module.exports = docenteCrudService;
