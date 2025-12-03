const createCrudService = (model) => ({
    create: (data, options = {}) => model.create(data, options),

    findAll: (where = {}, options = {}) =>
        model.findAll({ where, ...options }),

    findById: async (id) => {
        const data = await model.findByPk(id);
        if (!data) throw new Error("Recurso no encontrado");
        return data;
    },

    update: async (id, data) => {
        const [updated] = await model.update(data, { where: { id } });
        if (!updated) throw new Error("Recurso no encontrado");

        return model.findByPk(id);
    },

    delete: async (id) => {
        const deleted = await model.destroy({ where: { id } });
        if (!deleted) throw new Error("Recurso no encontrado");
        return true;
    },
});

module.exports = createCrudService;
