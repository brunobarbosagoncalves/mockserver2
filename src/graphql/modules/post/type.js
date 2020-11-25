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
    type Post{
        id: ID!
        title: String!
        content: String!
        userId: ID
        createdAt: String
        updatedAt: String
        deletedAt: String
        user: User
        
    }

    #Definition user input create
    input PostCreateInput{
        title: String!
        content: String!
        userId: String
    }

    #Definition user input update
    input PostUpdateInput{
        title: String!
        content: String!
        userId: String!
    }


`
