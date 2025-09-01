import { Router } from "express";
import fs from "fs";

const router = Router();
const personajes = JSON.parse(
  fs.readFileSync("./data/personajes.json", "utf-8")
);

router.get("/", (req, res) => {
  const { nombre, rol } = req.query;
  let resultado = personajes;

  if (nombre) {
    resultado = resultado.filter((p) => {
      return p.nombre.toLowerCase().includes(nombre.toLowerCase());
    });
  }

  if (rol) {
    resultado = resultado.filter(
      (p) => p.rol.toLowerCase() === rol.toLowerCase()
    );
  }

  if (resultado.length === 0) {
    return res.status(404).json({
      status: "error",
      message: "No se encontraron personajes con esos filtros",
    });
  }

  res.json({
    status: "success",
    total: resultado.length,
    filters: { nombre, rol },
    data: resultado,
    timestamp: new Date().toISOString(),
  });
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(404).json({
      status: "error",
      message: "ID invalido",
    });
  }

  const personaje = personajes.find((p) => p.id === id);
  if (!personaje) {
    return res
      .status(404)
      .json({ status: "error", message: "Personaje no encontrado" });
  }

  res.json({
    status: "success",
    total: 1,
    filters: { id },
    data: personaje,
  });
});

export default router;
