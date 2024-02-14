const { country } = require("../db");

const findCountryById = async (id) => {
  try {
    const countryID = await country.findOne({
      where: { id },
    });
    return countryID;
  } catch (error) {
    throw new Error("Country not found");
  }
};

module.exports = findCountryById;
