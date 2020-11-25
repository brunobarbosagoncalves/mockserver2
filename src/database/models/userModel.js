import modelOptions from '~database/config/modelOptions'
import fieldOptions from '~database/config/fieldOptions'

import { encrypt } from '~plugins/encrypt'

export default (sequelize, DataTypes) =>
  sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      //field options
      ...fieldOptions
    },
    {
      sequelize,
      modelName: 'User',
      ...modelOptions,
      hooks: {
        async beforeCreate(instance, options) {
          if (!instance.name || !instance.name.length) {
            return Promise.reject(new Error('Nome deve ser preenchido'))
          }

          if (!instance.password || !instance.password.length) {
            return Promise.reject(new Error('Senha inválida'))
          }

          instance.password = await encrypt(instance.password)
        },
        async beforeBulkUpdate(instance, options) {
          if (instance.attributes.password) {
            instance.attributes.password = await encrypt(
              instance.attributes.password
            )
          }
        }
      }
    }
  )
