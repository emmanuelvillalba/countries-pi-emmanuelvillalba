const { Country } = require("../db");

const findCountryById = async (id) => {
  const countryID = await Country.findOne({
    where: { id },
  });
  return countryID;
};

module.exports = findCountryById;
