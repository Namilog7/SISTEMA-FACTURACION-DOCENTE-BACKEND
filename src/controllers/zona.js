const zonaController = (zonaService) => ({

    create: async (req, res) => {
        try {
            const data = await zonaService.crearZona(req.body);
            res.status(201).json(data);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    getAll: async (req, res) => {
        try {
            const data = await zonaService.obtenerZonas(req.query);
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getOne: async (req, res) => {
        try {
            const data = await zonaService.obtenerZonaPorId(req.params.id);
            res.json(data);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    },

    update: async (req, res) => {
        try {
            const data = await zonaService.actualizarZona(
                req.params.id,
                req.body
            );
            res.json(data);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    },

    delete: async (req, res) => {
        try {
            await zonaService.eliminarZona(req.params.id);
            res.json({ deleted: true });
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    },
});

module.exports = zonaController;
