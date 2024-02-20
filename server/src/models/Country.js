const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Country",
    {
      id: {
        type: DataTypes.STRING(3),
        primaryKey: true,
        validate: {
          is: {
            args: /^[a-z]{3}$/i,
            msg: "ID must be a 3-letter string",
          },
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Name cannot be empty",
          },
        },
      },
      continent: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Continent cannot be empty",
          },
        },
      },
      capital: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Capital cannot be empty",
          },
        },
      },
      subregion: {
        type: DataTypes.STRING,
        defaultValue: "unknown",
      },
      area: {
        type: DataTypes.INTEGER,
        validate: {
          min: {
            args: 1,
            msg: "Area cannot be negative",
          },
        },
      },
      population: {
        type: DataTypes.INTEGER,
        allowNull: false,
        min: {
          args: 1,
          msg: "Population cannot be negative",
        },
      },
      flag: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: {
            args: true,
            msg: "Flag must be a valid URL"
          },
        },
      },
    },
    { timestamps: false }
  );
};
