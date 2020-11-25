export default `
    createPost(input: PostCreateInput!): Post   
    updatePost(id: ID!,input: PostUpdateInput!): Post   
    deletePost(id: ID!): Boolean
`
