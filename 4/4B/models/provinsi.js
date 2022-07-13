"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class provinsi extends Model {
    static associate(models) {

      provinsi.hasMany(models.kabupaten),
        {
          as: "kabupaten",
          foreignKey: {
            name: "idProvinsi",
          },
        };
    }
  }

  provinsi.init(
    {
      nama: DataTypes.STRING,
      diresmikan: DataTypes.STRING,
      photo: DataTypes.STRING,
      pulau: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "provinsi",
    }
  );
  return provinsi;
};
