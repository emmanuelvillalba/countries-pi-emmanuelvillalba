const { Sequelize } = require("sequelize");
const { DB_DEPLOY } = process.env;
const countryModel = require("./models/Country");
const activityModel = require("./models/Activity");

const sequelize = new Sequelize(DB_DEPLOY, {
  logging: false,
  native: false,
});

countryModel(sequelize);
activityModel(sequelize);

const { Country, Activity } = sequelize.models;

Country.belongsToMany(Activity, { through: "country_activity" });
Activity.belongsToMany(Country, { through: "country_activity" });

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
