import { makeExecutableSchema } from 'graphql-tools'

import typeDefs from './typeDef'
import resolvers from './resolver'

export default makeExecutableSchema({ typeDefs, resolvers })
