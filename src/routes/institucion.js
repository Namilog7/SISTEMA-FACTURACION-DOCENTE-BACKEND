// routes/institutionRouter.js

const { Router } = require("express");

const institutionRouter = (controller) => {
    const router = Router();

    router.post("/", controller.create);
    router.get("/", controller.getAll);
    router.get("/:id", controller.getById);
    router.put("/:id", controller.update);
    router.delete("/:id", controller.remove);

    return router;
};

module.exports = institutionRouter;
