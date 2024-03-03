// const fs = require("fs");
// const path = require("path");
const { Country } = require("../db");
const axios = require("axios");
URL_API = "http://localhost:5000/countries";

const upDateDB = async () => {
  try {
    // const data = await fs.readFileSync(
    //   path.join(__dirname, "../../api/db.json"),
    //   "utf8"
    // );
    // const jsonData = JSON.parse(data);

    const { data } = await axios(URL_API);

    let countries = data.map(async (country) => {
      let capital;
      if (!country.capital || country.capital.length === 0) {
        capital = "unknown";
      } else if (country.capital.length === 1) {
        capital = country.capital[0];
      } else {
        capital = country.capital.join(", ");
      }

      let countryData = {
        id: country.cca3,
        name: country.name.common,
        continent: country.continents[0],
        capital: capital,
        subregion: country.subregion,
        area: country.area,
        population: country.population,
        flag: country.flags.png,
      };

      await Country.findOrCreate({
        where: { id: countryData.id },
        defaults: countryData,
      });
    });

    await Promise.all(countries);
    console.log("Countries data loaded successfully");
  } catch (error) {
    console.error("Could not create countries list:", error.message);
  }
};

module.exports = upDateDB;
