import express from "express";
import employeService from "./employe.service.js";

const employeController = (redisClient) => {
  const router = express.Router();

  router.post("/employe", async (req, res) => {
    await employeService.createEmploye(req.body);
    res.status(201).json({ message: "Employe added successfully" });
  });

  router.get("/employe", async (req, res) => {
    const employes = await employeService.listEmployes();
    res.json(employes);
  });

  router.get("/employe/redis", async (req, res) => {
    try {
      const cacheKey = "employes";

      const cachedEmployes = await redisClient.get(cacheKey);

      if (cachedEmployes) {
        return res.json(JSON.parse(cachedEmployes));
      }

      const employes = await employeService.listEmployes();
      await redisClient.set(cacheKey, JSON.stringify(employes), { EX: 25 });

      res.json(employes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  return router;
};

export default employeController;
