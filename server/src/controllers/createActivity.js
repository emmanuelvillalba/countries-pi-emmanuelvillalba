const { Country, Activity } = require("../db");

const createActivity = async ({
  name,
  difficulty,
  duration,
  season,
  countriesId,
}) => {
  try {
    await Promise.all(
      countriesId.map(async (CountryIdM) => {
        const country = await Country.findByPk(CountryIdM);

        if (!country) {
          throw new Error(`The country ID ${CountryIdM} does not exist`);
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

        const existingAssociation = await country.hasActivity(newActivity);
        if (existingAssociation) {
          throw new Error(
            `This activity already exists in the country with ID ${CountryIdM}`
          );
        }

        await country.addActivity(newActivity);
      })
    );

    const countriesActivity = await Country.findAll({
      include: [
        {
          model: Activity,
          where: {
            name: name,
          },
          through: {
            attributes: [],
          },
        },
      ],
    });

    return countriesActivity;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = createActivity;

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

//     // const [created] = await country_activity.findOrCreate({
//     //   where: {
//     //     CountryId: CountryIdM,
//     //     ActivityId: newActivity.dataValues.id,
//     //   },
//     // });

//     // if (!created) {
//     //   throw new Error("This activity already exists in this country");
//     // }

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
