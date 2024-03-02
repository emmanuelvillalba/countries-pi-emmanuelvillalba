const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_DEPLOY } = process.env;
const countryModel = require("./models/Country");
const activityModel = require("./models/Activity");

const sequelize = new Sequelize(DB_DEPLOY, {
  logging: false,
  native: false,
  dialectOptions: {
    ssl: {
      require: true,
    },
  },
});
// `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

countryModel(sequelize);
activityModel(sequelize);

const { Country, Activity } = sequelize.models;

Country.belongsToMany(Activity, { through: "country_activity" });
Activity.belongsToMany(Country, { through: "country_activity" });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
