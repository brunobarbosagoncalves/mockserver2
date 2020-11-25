import modelOptions from '~database/config/modelOptions'
import fieldOptions from '~database/config/fieldOptions'

export default (sequelize, DataTypes) =>
  sequelize.define(
    'Post',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false
      },
      content: {
        type: DataTypes.STRING,
        allowNull: false
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id',
          onDelete: 'CASCADE'
        }
      },
      //field options
      ...fieldOptions
    },
    {
      sequelize,
      modelName: 'Post',
      ...modelOptions,
      hooks: {
        async beforeCreate(instance, options) {
          if (!instance.title || !instance.title.length) {
            return Promise.reject(new Error('Título deve ser preenchido'))
          }

          if (!instance.content || !instance.content.length) {
            return Promise.reject(new Error('Conteúdo deve ser prenchido'))
          }
        }
      }
    }
  )
