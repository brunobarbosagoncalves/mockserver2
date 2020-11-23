const userType = `
    #Definition user type
    type User{
        #Id of user
        id: ID!
        name: String!
        email: String!
        photo: String
        createdAt: String!
        updatedAt: String!
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
        photo: String!
    }

    #Definition user input update password
    input UserUpdatePasswordInput{
        password: String!
    }
`
export default userType
