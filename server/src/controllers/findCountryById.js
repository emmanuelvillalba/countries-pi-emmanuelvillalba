const { Country, Activity } = require("../db");

const findCountryById = async (id) => {
  const countryID = await Country.findByPk(id, {
    include: [
      {
        model: Activity,
        through: {
          attributes: [],
        },
      },
    ],
  });
  
  return countryID;
};

module.exports = findCountryById;
