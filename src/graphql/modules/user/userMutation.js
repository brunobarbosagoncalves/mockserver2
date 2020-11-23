const userMutation = `
    createUser(input: UserCreateInput!): User   
    updateUser(id: ID!,input: UserUpdateInput!): User   
    updateUserPassword(id: ID!,input: UserUpdatePasswordInput!): Boolean   
    deleteUser(id: ID!): Boolean
`

export default userMutation
