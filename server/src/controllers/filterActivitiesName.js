const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const filterActivitiesName = async (name) => {
  try {
    const filteredActivities = await Activity.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      include: {
        model: Country,
        through: {
          attributes: [],
        },
      },
    });

    return filteredActivities;
  } catch (error) {
    throw new Error("Error when searching for activities");
  }
};

module.exports = filterActivitiesName;
