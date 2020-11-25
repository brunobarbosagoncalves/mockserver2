export default `
    createUser(input: UserCreateInput!): User   
    updateUser(id: ID!,input: UserUpdateInput!): User   
    updateUserPassword(id: ID!,input: UserUpdatePasswordInput!): User   
    deleteUser(id: ID!): Boolean
`
