module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('User', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      createdAt: {
        defaultValue: null,
        type: Sequelize.DataTypes.DATE
      },
      updatedAt: {
        defaultValue: null,
        type: Sequelize.DataTypes.DATE
      },
      deletedAt: {
        type: Sequelize.DataTypes.DATE,
        defaultValue: null
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('User')
  }
}
