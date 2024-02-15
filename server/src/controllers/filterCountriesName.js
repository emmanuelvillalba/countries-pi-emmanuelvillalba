const { Country } = require("../db");
const { Op } = require("sequelize");

const filterCountriesName = async (name) => {
  try {
    const filterCountriesName = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
    });

    return filterCountriesName;
  } catch (error) {
    throw new Error("Error when searching for countries");
  }
};

module.exports = filterCountriesName;
