import fs from "fs";
import express from "express";
import personajesRouter from "./routes/personajes.js";
import momentosRouter from "./routes/momentos.js";
import cors from "cors";
import { timeStamp } from "console";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/personajes", personajesRouter);
app.use("/momentos", momentosRouter);

const personajes = JSON.parse(
  fs.readFileSync("./data/personajes.json", "utf-8")
);

app.get("/", (req, res) => {
  res.send("API de American Dad activa 🛸");
});

// app.get("/personajes/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const personaje = personajes.find((p) => p.id === id);

//   if (!personaje) {
//     return res.status(404).json({
//       status: "error",
//       message: "Personaje no encontrado",
//     });
//   }

//   res.json({
//     status: "success",
//     data: personaje,
//   });
// });

app.get("/stats", (req, res) => {
  const total = personajes.length;
  const roles = personajes.reduce((acc, p) => {
    acc[p.rol] = (acc[p.rol] || 0) + 1;
    return acc;
  }, {});
  res.json({ totalPersonajes: total, roles });
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    timeStamp: new Date().toISOString(),
    message: "API funcionando correctamente 🛸",
  });
});

app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
