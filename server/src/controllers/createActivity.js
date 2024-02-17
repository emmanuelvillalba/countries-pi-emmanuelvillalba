const { Country, Activity } = require("../db");

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

    const [newActivity] = await Activity.findOrCreate({
      where: { name },
      defaults: {
        name,
        difficulty,
        duration,
        season,
      },
    });

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

    return `Activity ${name} successfully created in country ${countriesId.join(
      ", "
    )}`;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = createActivity;

//? ERRORES CONCATENADOS y TODO EN 1 SOLO PROMISE.ALL
// const createActivity = async ({
//   name,
//   difficulty,
//   duration,
//   season,
//   countriesId,
// }) => {
//   try {
//     let missingCountries = [];
//     let existingAssociations = [];
//     let successfulCreations = [];

//     await Promise.all(
//       countriesId.map(async (CountryIdM) => {
//         const country = await Country.findByPk(CountryIdM);

//         if (!country) {
//           missingCountries.push(CountryIdM);
//         } else {
//           const [newActivity] = await Activity.findOrCreate({
//             where: { name },
//             defaults: {
//               name,
//               difficulty,
//               duration,
//               season,
//             },
//           });

//           const existingAssociation = await country.hasActivity(newActivity);
//           if (existingAssociation) {
//             existingAssociations.push(CountryIdM);
//           } else {
//             await country.addActivity(newActivity);
//             successfulCreations.push(CountryIdM);
//           }
//         }
//       })
//     );

//     let errorMessage = "";
//     let successMessage = "";
//     let message = "";

//     if (existingAssociations.length > 0) {
//       errorMessage += `Activity already exist in the country id:${existingAssociations.join(
//         ", "
//       )}.`;
//     }

//     if (missingCountries.length > 0) {
//       errorMessage += `The country id:${missingCountries.join(
//         ", "
//       )} do not exist. `;
//     }

//     if (successfulCreations.length > 0) {
//       successMessage = `Activity ${name} successfully created in country ${successfulCreations.join(
//         ", "
//       )}.`;
//     } else {
//       throw new Error(errorMessage);
//     }

//     if (successMessage.length > 0) {
//       message = successMessage + " " + errorMessage;
//     }

//     return message;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };
// module.exports = createActivity;

//? con tabla intermedia
// const { Country, Activity, country_activity } = require("../db");

// const createActivity = async ({
//   name,
//   difficulty,
//   duration,
//   season,
//   CountryIdM,
// }) => {
//   try {
//     const [newActivity] = await Activity.findOrCreate({
//       where: { name },
//       defaults: {
//         difficulty,
//         duration,
//         season,
//       },
//     });

    // const [created] = await country_activity.findOrCreate({
    //   where: {
    //     CountryId: CountryIdM,
    //     ActivityId: newActivity.dataValues.id,
    //   },
    // });

    // if (!created) {
    //   throw new Error("This activity already exists in this country");
    // }

//     const country = await Country.findByPk(CountryIdM);

//     if (!country) {
//       throw new Error("The country ID entered does not exist");
//     }

//     const existingAssociation = await country.hasActivity(newActivity);
//     if (existingAssociation) {
//       throw new Error("This activity already exists in this country");
//     }

//     await country.addActivity(newActivity);

//     const countriesActivity = await Country.findAll({
//       include: [
//         {
//           model: Activity,
//           where: {
//             id: newActivity.dataValues.id,
//           },
//           through: {
//             attributes: [],
//           },
//         },
//       ],
//     });

//     return countriesActivity;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// module.exports = createActivity;
