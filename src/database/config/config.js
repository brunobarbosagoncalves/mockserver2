//load env
require('dotenv').config({
  path: require('path').resolve(`.env.${process.env.NODE_ENV.trim()}`)
})

module.exports = {
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  host: process.env.DATABASE_HOST,
  dialect: process.env.DATABASE_DIALECT
}
