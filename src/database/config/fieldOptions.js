import { DataTypes } from 'sequelize'

module.exports = {
  createdAt: {
    defaultValue: null,
    type: DataTypes.DATE
  },
  updatedAt: {
    defaultValue: null,
    type: DataTypes.DATE
  },
  deletedAt: {
    type: DataTypes.DATE,
    defaultValue: null
  }
}
