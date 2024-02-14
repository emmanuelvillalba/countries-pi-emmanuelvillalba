const { country } = require("../db");

const findAllCountries = async () => {
  try {
    const allCountries = await country.findAll();
    return allCountries;
  } catch (error) {
    throw new Error("Could not find countries list");
  }
};

module.exports = findAllCountries;
