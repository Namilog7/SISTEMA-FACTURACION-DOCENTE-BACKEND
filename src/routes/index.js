const express = require("express");
const docenteController = require("../controllers/docente");
const docenteRouter = require("../routes/docente");
const institutionRouter = require("./institucion");
const institutionController = require("../controllers/institucion");

const app = express();
app.use(express.json());

app.use("/docentes", docenteRouter(docenteController));
app.use("/institucion", institutionRouter(institutionController))
