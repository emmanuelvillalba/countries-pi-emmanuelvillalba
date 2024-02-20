const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Activity",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            args: true,
            msg: "Name cannot be empty",
          },
          len: {
            args: [2, 30],
            msg: "Name should be between 2 and 30 characters long",
          },
        },
      },
      difficulty: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: {
            args: 1,
            msg: "Difficulty cannot be less than 1",
          },
          max: {
            args: 5,
            msg: "Difficulty cannot be more than 5",
          },
        },
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: {
            args: 1,
            msg: "Duration cannot be negative",
          },
          max: {
            args: 72,
            msg: "Duration cannot be more than 72 hs",
          },
        },
      },
      season: {
        type: DataTypes.ENUM("Summer", "Fall", "Winter", "Spring"),
        allowNull: false,
      },
    },
    { timestamps: false }
  );
};
