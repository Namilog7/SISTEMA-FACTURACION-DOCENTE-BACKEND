// routes/docenteRouter.js

const { Router } = require("express");

const docenteRouter = (controller) => {
    const router = Router();

    router.post("/", controller.create);
    router.get("/", controller.getAll);
    router.get("/:id", controller.getOne);
    router.put("/:id", controller.update);
    router.delete("/:id", controller.delete);

    return router;
};

module.exports = docenteRouter;
