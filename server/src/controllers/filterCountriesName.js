const { country } = require("../db");
const { Op } = require("sequelize");

const filterCountriesName = async (name) => {
  try {
    const filterCountriesName = await country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });

    if (filterCountriesName.length === 0) {
      throw new Error("No matches found");
    }
    return filterCountriesName;
  } catch (error) {
    throw new Error("Error when searching for countries");
  }
};

module.exports = filterCountriesName;
