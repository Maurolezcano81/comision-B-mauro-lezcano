const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

// Creo un model de los posts del foro

const Post = sequelize.define('Post', {
  titulo: DataTypes.STRING,
  contenido: DataTypes.TEXT,
  enlace_imagen: DataTypes.STRING,
  fecha_creado: {
    type: DataTypes.DATEONLY,
    defaultValue: sequelize.literal('CURRENT_DATE'),
  }

}, {
  timestamps: false,
});

module.exports = Post;
