const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Products = db.define('products', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  description: {
    type: DataTypes.STRING,
    allowNull: false
  },

  price: {
    type: DataTypes.DECIMAL(10, 2), 
    allowNull: false
  },

  stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
})

module.exports = Products

