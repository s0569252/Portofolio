const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database'); // Adjust the path according to your project structure

class Item extends Model {}

Item.init({
  // Model attributes are defined here
  itemName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  expirationDate: {
    type: DataTypes.DATE,
    allowNull: false
  },
  amount: {
    type: DataTypes.NUMBER,
    allowNull: true
  },
  isFrozen: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  unit: {
    type: DataTypes.STRING,
    validate: {
      is: /^(g|kg|l|ml|lb|St\.)$/
    },  
    allowNull: true
  }
  // Add other fields as needed
}, {
  sequelize, // Pass the sequelize instance
  modelName: 'item' // Name of the table
});

module.exports = Item;

