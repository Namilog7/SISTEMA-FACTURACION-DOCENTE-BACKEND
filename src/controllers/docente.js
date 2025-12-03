// controllers/docenteController.js

const docenteController = (docenteService) => ({
    create: async (req, res) => {
        try {
            const data = await docenteService.crearDocente(req.body);
            res.status(201).json(data);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    getAll: async (req, res) => {
        try {
            const data = await docenteService.obtenerDocentes(req.query);
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    getOne: async (req, res) => {
        try {
            const data = await docenteService.obtenerDocentePorId(req.params.id);
            res.json(data);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    },

    update: async (req, res) => {
        try {
            const data = await docenteService.actualizarDocente(
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
            await docenteService.eliminarDocente(req.params.id);
            res.json({ deleted: true });
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
});

module.exports = docenteController;
