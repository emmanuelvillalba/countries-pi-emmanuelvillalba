const { Country, Activity } = require("../db");
const findAllActivities = require("./findAllActivities");

const createActivity = async ({
  name,
  difficulty,
  duration,
  season,
  countriesId,
}) => {
  try {
    const countries = await Promise.all(
      countriesId.map((CountryIdM) => Country.findByPk(CountryIdM))
    );
    const notFoundCountries = countriesId.filter(
      (id, index) => !countries[index]
    );
    if (notFoundCountries.length > 0) {
      throw new Error(
        `The country id: ${notFoundCountries.join(", ")} do not exist`
      );
    }

    const existingActivity = await Activity.findOne({
      where: { name, difficulty, duration, season },
    });
    let newActivity;

    if (existingActivity) {
      newActivity = existingActivity;
    } else {
      const existingName = await Activity.findOne({ where: { name } });
      if (existingName) {
        throw new Error("Repeated activity name");
      } else {
        newActivity = await Activity.create({
          name,
          difficulty,
          duration,
          season,
        });
      }
    }

    const existingAssociations = await Promise.all(
      countries.map((country) => country.hasActivity(newActivity))
    );
    const alreadyExist = countriesId.filter(
      (id, index) => existingAssociations[index]
    );
    if (alreadyExist.length > 0) {
      throw new Error(
        `Activity already exist in the country id: ${alreadyExist.join(", ")}`
      );
    }

    await Promise.all(
      countries.map((country) => country.addActivity(newActivity))
    );

    const allActivity = await findAllActivities();

    return allActivity;
    // `Activity ${name} successfully created in country ${countriesId.join(
    //   ", "
    // )}`;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = createActivity;
