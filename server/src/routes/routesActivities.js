const { Router } = require("express");
const createActivity = require("../controllers/createActivity");
const findAllActivities = require("../controllers/findAllActivities");
const filterActivitiesName = require("../controllers/filterActivitiesName");
const deleteActivity = require("../controllers/deleteActivity");

const routerActivities = Router();

routerActivities.get("/", async (req, res) => {
  const { name } = req.query;
  if (name) {
    try {
      const filteredActivity = await filterActivitiesName(name);
      if (filteredActivity.length === 0) {
        return res.status(404).json({ error: "No name matches found" });
      }
      res.status(200).json(filteredActivity);
    } catch (error) {
      res.status(500).json({ error: error.menssage });
    }
  } else {
    try {
      const allActivities = await findAllActivities();
      res.status(200).json(allActivities);
    } catch (error) {
      res.status(500).json({ error: error.menssage });
    }
  }
});

routerActivities.post("/", async (req, res) => {
  let { name, difficulty, duration, season, countries } = req.body;
  
  if (!name || !difficulty || !duration || !season || countries == "" ) {
    return res.status(400).json({ error: "Missing data" });
  }
  const countriesId = countries
    .split(",")
    .map((country) => country.toUpperCase());

  name = name.toUpperCase();

  try {
    const activitiesCountries = await createActivity({
      name,
      difficulty,
      duration,
      season,
      countriesId,
    });

    return res.status(201).json(activitiesCountries);
  } catch (error) {
    if (error.message.includes("do not exist")) {
      return res.status(404).json({ error: error.message });
    } else if (error.message.includes("Repeated activity name")) {
      return res.status(404).json({ error: error.message });
    } else if (error.message.includes("already exist")) {
      return res.status(409).json({ error: error.message });
    } else {
      return res.status(500).json({ error: error.message });
    }
  }
});

routerActivities.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    if (Number(id)) {
      const deletedActivity = await deleteActivity(id);
      res.status(200).json(deletedActivity);
    } else {
      return res.status(400).json({ error: "ID must be a number" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = routerActivities;
