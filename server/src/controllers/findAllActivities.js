const { Activity } = require("../db");

const findAllActivities = async () => {
  try {
    const allActivities = await Activity.findAll();
    return allActivities;
  } catch (error) {
    throw new Error("Could not find activities list");
  }
};

module.exports = findAllActivities;
