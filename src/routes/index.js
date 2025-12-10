const { Router } = require("express");
const express = require("express");

// Services

const docenteCrudService = require("../services/docente/docenteCrudService")
const institucionCrudService = require("../services/institucion/institucionCrudService")
const zonaCrudService = require("../services/zona/zonaCrudService")

// Controladores

const docenteController = require("../controllers/docente")(docenteCrudService());
const institutionController = require("../controllers/institucion")(institucionCrudService());
const zonaController = require("../controllers/zona")(zonaCrudService())

// Routers

const docenteRouter = require("../routes/docente");
const institutionRouter = require("./institucion");
const zonaRouter = require("./zona");

const app = express();
app.use(express.json());
const router = Router();

console.log("INSTITUTION ROUTER:", institutionRouter);
console.log("DOCENTE ROUTER:", docenteRouter);


router.use("/docentes", docenteRouter(docenteController));
router.use("/institucion", institutionRouter(institutionController))
router.use("/zona", zonaRouter(zonaController))


module.exports = router