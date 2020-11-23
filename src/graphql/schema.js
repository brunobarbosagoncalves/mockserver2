import { makeExecutableSchema } from 'graphql-tools'

// import typeDefs from './typeDef'
// import Query from './query'
// import Mutation from './mutation'

// Construct a schema, using GraphQL schema language
const schema = `
  """
  My description
  """
  type Query {
    """
    Method hello return String
    """
    hello: String

    myuser: User!
  }

  type User {
    name: String!
    age: Int!
  }
`

// The root provides a resolver function for each API endpoint
const root = {
  Query: {
    hello: (obj, args) => 'Hello world!',
    myuser: (obj, args) => ({
      name: args.name,
      age: args.age
    })
  }
}

export default makeExecutableSchema({ typeDefs: schema, resolvers: root })
