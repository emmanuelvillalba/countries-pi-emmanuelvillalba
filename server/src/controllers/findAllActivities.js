const { Activity, Country } = require("../db");

const findAllActivities = async () => {
  try {
    const allActivities = await Activity.findAll({
      include: {
        model: Country,
        through: {
          attributes: [],
        },
      },
    });
    return allActivities;
  } catch (error) {
    throw new Error("Could not find activities list");
  }
};

module.exports = findAllActivities;
