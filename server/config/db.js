const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('vitalsigndb', 'root', '65412Muteb', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize.authenticate()
  .then(() => {
    console.log('CONNECTION ESTABLISHED SUCCESSFULLY.');
  })
  .catch(err => {
    console.error('UNABLE TO CONNECT TO THE DATABASE:', err);
  });

module.exports = sequelize;
