// controllers/institutionController.js

const institutionController = (institutionService) => ({
    create: async (req, res) => {
        try {
            const data = await institutionService.create(req.body);
            res.status(201).json(data);
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    },

    getAll: async (req, res) => {
        try {
            const data = await institutionService.getAll();
            res.json(data);
        } catch (e) {
            res.status(500).json({ error: e.message });
        }
    },

    getById: async (req, res) => {
        try {
            const data = await institutionService.getById(req.params.id);
            res.json(data);
        } catch (e) {
            res.status(404).json({ error: e.message });
        }
    },

    update: async (req, res) => {
        try {
            const data = await institutionService.update(req.params.id, req.body);
            res.json(data);
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    },

    remove: async (req, res) => {
        try {
            const data = await institutionService.remove(req.params.id);
            res.json(data);
        } catch (e) {
            res.status(400).json({ error: e.message });
        }
    },
});

module.exports = institutionController;
