const { Country, Activity } = require("../db");

const findAllCountries = async () => {
  try {
    const allCountries = await Country.findAll({
      include: [
        {
          model: Activity,
          through: {
            attributes: [],
          },
        },
      ],
    });
    return allCountries;
  } catch (error) {
    throw new Error("Could not find countries list");
  }
};

module.exports = findAllCountries;
