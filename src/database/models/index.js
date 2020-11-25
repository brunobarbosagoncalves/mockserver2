import { readdirSync } from 'fs'
import { basename, join } from 'path'
import Sequelize, { DataTypes } from 'sequelize'

const configs = require(`${__dirname}/../config/config`)

const db = {}

const sequelize = new Sequelize(
  configs.database,
  configs.username,
  configs.password,
  configs
)

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
    console.log(sequelize.connectionManager.config)
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
  })

readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )
  .forEach((file) => {
    const model = require(join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

//import models
import userModel from './userModel'
import postModel from './postModel'

//configure models
db.userModel = userModel(sequelize, DataTypes)
db.postModel = postModel(sequelize, DataTypes)

//Relations
db.userModel.hasOne(db.postModel, {
  foreignKey: 'userId',
  onUpdate: 'CASCADE'
})

db.postModel.belongsTo(db.userModel, {
  foreignKey: 'userId',
  onUpdate: 'CASCADE'
})

export default db
