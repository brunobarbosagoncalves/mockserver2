const userQuery = `
    allUsers(first: Int, offset: Int): [User!]!   
    user(id: ID!): User   
`
export default userQuery
