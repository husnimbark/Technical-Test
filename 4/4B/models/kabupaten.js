'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kabupaten extends Model {
 
    static associate(models) {
      kabupaten.belongsTo(models.provinsi),
      {
        as: "provinsi",
        foreignKey: {
          name: "idProvinsi",
        },
      };
  }
}
    
  
  kabupaten.init({
    provinsiId: DataTypes.INTEGER,
    nama: DataTypes.STRING,
    diresmikan: DataTypes.STRING,
    photo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'kabupaten',
  });
  return kabupaten;
};