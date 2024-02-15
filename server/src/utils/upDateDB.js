const fs = require("fs");
const path = require("path");
const { Country } = require("../db");

const upDateDB = async () => {
  try {
    const data = await fs.readFileSync(
      path.join(__dirname, "../../api/db.json"),
      "utf8"
    );
    const jsonData = JSON.parse(data);

    let countries = jsonData.countries.map((country) => {
      let capital;
      if (!country.capital || country.capital.length === 0) {
        capital = "unknown";
      } else if (country.capital.length === 1) {
        capital = country.capital[0];
      } else {
        capital = country.capital.join(", ");
      }

      return {
        id: country.cca3,
        name: country.name.common,
        continent: country.continents[0],
        capital: capital,
        subregion: country.subregion,
        area: country.area,
        population: country.population,
        flag: country.flags.png,
      };
    });

    await Country.bulkCreate(countries);
    console.log("Countries data loaded successfully");
  } catch (error) {
    console.error("Could not create countries list:", error.message);
  }
};

module.exports = upDateDB;
