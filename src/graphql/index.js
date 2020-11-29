import { graphqlHTTP } from 'express-graphql'

import db from '~database'
import graphqlFields from '~plugins/graphqlFields'
import errorHandler from '~plugins/errorHandler'

import { postLoader } from './loaders'

import schema from './schema'

export default graphqlHTTP({
  schema,
  context: { db, graphqlFields, errorHandler, postLoader },
  customFormatErrorFn: (err) => errorHandler({ ...err, origin: 'graphql' }),
  graphiql: true,
  pretty: true
})
