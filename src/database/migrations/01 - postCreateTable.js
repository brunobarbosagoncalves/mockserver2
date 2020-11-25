module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Post', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      title: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      content: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      userId: {
        type: Sequelize.DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          referencesKey: 'id',
          onDelete: 'CASCADE'
        }
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
    return queryInterface.dropTable('Post')
  }
}
