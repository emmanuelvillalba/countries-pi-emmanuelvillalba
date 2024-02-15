const { Country } = require("../db");

const findAllCountries = async () => {
  try {
    const allCountries = await Country.findAll();
    return allCountries;
  } catch (error) {
    throw new Error("Could not find countries list");
  }
};

module.exports = findAllCountries;
