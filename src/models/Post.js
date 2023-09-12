const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Creo un model de los posts del foro

const Post = sequelize.define('Post', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contenido: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  enlace_imagen: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  fecha_creado: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  fecha_actualizado: {
    type: DataTypes.DATETIME,
    defaultValue: DataTypes.NOW,
  }
});

module.exports = Post;
