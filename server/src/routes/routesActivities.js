const { Router } = require("express");
const createActivity = require("../controllers/createActivity");
const findAllActivities = require("../controllers/findAllActivities");

const routerActivities = Router();

routerActivities.get("/", async (req, res) => {
  try {
    const allActivities = await findAllActivities()
    res.status(200).json();
  } catch (error) {
    res.status(500).json({ error: error.menssage });
  }
});

routerActivities.post("/", async (req, res) => {
  try {
    const activity = await createActivity();
    res.status(200).json();
  } catch (error) {
    res.status(500).json({ error: error.menssage });
  }
});

module.exports = routerActivities;
