const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Anfitriao = sequelize.define('Anfitriao', {
  nome: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  senha: { type: DataTypes.STRING, allowNull: false },
  telefone: { type: DataTypes.STRING, allowNull: true },
  endereco: { type: DataTypes.STRING, allowNull: true },
}, {
  tableName: 'anfitrioes',
  timestamps: true,
});

module.exports = Anfitriao;
