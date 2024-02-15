const { Router } = require("express");
const createActivity = require("../controllers/createActivity");
const findAllActivities = require("../controllers/findAllActivities");

const routerActivities = Router();

routerActivities.get("/", async (req, res) => {
  try {
    const allActivities = await findAllActivities();
    res.status(200).json(allActivities);
  } catch (error) {
    res.status(500).json({ error: error.menssage });
  }
});

routerActivities.post("/", async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;

  if (!name || !difficulty || !duration || !season || !countries) {
    return res.status(400).json({ error: "Missing data" });
  }

  const countriesId = countries
    .split(",")
    .map((country) => country.toUpperCase());

  try {
    const countriesActivity = await createActivity({
      name,
      difficulty,
      duration,
      season,
      countriesId,
    });

    return res.status(201).json(countriesActivity);
  } catch (error) {
    if (error.message.includes("does not exist")) {
      return res.status(404).json({ error: error.message });
    } else if (error.message.includes("already exists")) {
      return res.status(409).json({ error: error.message });
    } else {
      return res.status(500).json({ error: error.message });
    }
  }
});

module.exports = routerActivities;
