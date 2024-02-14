const { Router } = require("express");
const findAllCountries = require("../controllers/findAllCountries");
const findCountryById = require("../controllers/findCountryById");
const filterCountriesName = require("../controllers/filterCountriesName");

const routerCountries = Router();

routerCountries.get("/", async (req, res) => {
  try {
    const allCountries = await findAllCountries();
    res.status(200).json(allCountries);
  } catch (error) {
    res.status(500).json({ error: error.menssage });
  }
});

routerCountries.get("/id/:id", async (req, res) => {
  const { id } = req.params;
  const idM = id.toUpperCase();
  try {
    const countryID = await findCountryById(idM);
    res.status(200).json(countryID);
  } catch (error) {
    res.status(500).json({ error: error.menssage });
  }
});

routerCountries.get("/name", async (req, res) => {
  const { name } = req.query;

  if (!name) {
    res.status(400).json({ error: "Please provide a country name" });
  }
  try {
    const filteredCountry = await filterCountriesName(name);
    res.status(200).json(filteredCountry);
  } catch (error) {
    if (error.menssage === "No matches found") {
      return res.status(404).json({ menssage: "No matches found" });
    } else {
      res.status(500).json({ error: error.menssage });
    }
  }
});

module.exports = routerCountries;
