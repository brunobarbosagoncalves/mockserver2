import { graphqlHTTP } from 'express-graphql'

import db from '~database'
import graphqlFields from '~plugins/graphqlFields'
import errorHandler from '~plugins/errorHandler'

import schema from './schema'

export default graphqlHTTP({
  schema,
  context: { db, graphqlFields, errorHandler },
  customFormatErrorFn: (err) => {
    return { name: err.name, message: err.message, statusCode: err.statusCode }
  },
  graphiql: true,
  pretty: true
})
