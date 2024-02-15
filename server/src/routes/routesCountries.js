const { Router } = require("express");
const findAllCountries = require("../controllers/findAllCountries");
const findCountryById = require("../controllers/findCountryById");
const filterCountriesName = require("../controllers/filterCountriesName");

const routerCountries = Router();

routerCountries.get("/:id", async (req, res) => {
  const { id } = req.params;
  const idM = id.toUpperCase();
  try {
    const countryID = await findCountryById(idM);
    if (!countryID) {
      return res.status(404).json({ error: "Country not found" });
    }
    res.status(200).json(countryID);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

routerCountries.get("/", async (req, res) => {
  const { name } = req.query;
  if (name) {
    try {
      const filteredCountry = await filterCountriesName(name);
      if (filteredCountry.length === 0) {
        return res.status(404).json({ error: "No matches found" });
      }
      res.status(200).json(filteredCountry);
    } catch (error) {
      res.status(500).json({ error: error.menssage });
    }
  } else {
    try {
      const allCountries = await findAllCountries();
      res.status(200).json(allCountries);
    } catch (error) {
      res.status(500).json({ error: error.menssage });
    }
  }
});

module.exports = routerCountries;
