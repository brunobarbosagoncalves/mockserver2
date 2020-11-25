import mutation from './mutation'
import query from './query'

export default `

    type Query{
        ${query}
    }
    type Mutation{
        ${mutation}
    }

    #Definition user type
    type User{
        id: ID!
        name: String!
        email: String!
        createdAt: String
        updatedAt: String
        deletedAt: String
        posts: [Post]!
        
    }

    #Definition user input create
    input UserCreateInput{
        name: String!
        email: String!
        password: String!
    }

    #Definition user input update
    input UserUpdateInput{
        name: String!
        email: String!
    }

    input UserUpdatePasswordInput{
        password: String!
        newpassword: String!
    }

`
