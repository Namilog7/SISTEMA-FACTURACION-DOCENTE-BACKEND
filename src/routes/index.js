const express = require("express");
const docenteCrudService = require("../services/docente/docenteCrudService")
const institucionCrudService = require("../services/institucion/institucionCrudService")
const docenteController = require("../controllers/docente")(docenteCrudService);
const docenteRouter = require("../routes/docente");
const institutionRouter = require("./institucion");
const institutionController = require("../controllers/institucion")(institucionCrudService);
const { Router } = require("express")

const app = express();
app.use(express.json());
const router = Router();

console.log("INSTITUTION ROUTER:", institutionRouter);
console.log("DOCENTE ROUTER:", docenteRouter);


router.use("/docentes", docenteRouter(docenteController));
router.use("/institucion", institutionRouter(institutionController))


module.exports = router