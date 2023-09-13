const dotenv = require('dotenv');
const Sequelize = require('sequelize');

dotenv.config(); // Cargar variables de entorno desde .env

const sequelize = new Sequelize({
  database: process.env.DB_DATABASE,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port:process.env.DB_PORT,
  dialect: 'mysql',
});

module.exports = sequelize;
