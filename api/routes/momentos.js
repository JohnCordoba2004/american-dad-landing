import { Router } from "express";
import fs from "fs";

const router = Router();
const momentos = JSON.parse(fs.readFileSync("./data/momentos.json", "utf-8"));

router.get("/", (req, res) => {
  res.json(momentos);
});

export default router;
