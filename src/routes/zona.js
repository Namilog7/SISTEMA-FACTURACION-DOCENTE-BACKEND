const express = require("express");
const zonaCrudService = require("../services/zona/zonaCrudService")
const zonaController = require("../controllers/zona")(zonaCrudService);

const router = express.Router();

router.post("/", zonaController.create);
router.get("/", zonaController.getAll);
router.get("/:id", zonaController.getOne);
router.put("/:id", zonaController.update);
router.delete("/:id", zonaController.delete);

module.exports = router;
