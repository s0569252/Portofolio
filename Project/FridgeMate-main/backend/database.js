
const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'database.sqlite' // Specify your path to the SQLite file
});

sequelize.authenticate()
  .then(() => console.log('Connection to database has been established successfully.'))
  .catch(err => console.error('Unable to connect to the database:', err));

sequelize.sync() // Sync models
  .then(() => console.log("Database synchronized!"));

module.exports = sequelize;