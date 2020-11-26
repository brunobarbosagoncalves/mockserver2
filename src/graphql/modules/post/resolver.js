export default {
  Post: {
    user: async (parent, args, { db: { userModel }, graphqlFields }, info) =>
      userModel.findOne({
        where: { id: parent.userId },
        attributes: graphqlFields(info)
      })
  },
  Query: {
    posts: async (
      parent,
      { limit = 10, offset = 0 },
      { db: { postModel }, graphqlFields },
      info
    ) =>
      postModel.findAll({
        //remove virtual fields graphql [user]
        attributes: graphqlFields(info, ['id', 'userId'], ['user']),
        limit,
        offset
      }),
    post: async (parent, { id }, { db: { postModel }, graphqlFields }, info) =>
      postModel.findOne({
        where: { id },
        //remove virtual fields graphql [user]
        attributes: graphqlFields(info, ['id', 'userId'], ['user'])
      })
  },
  Mutation: {
    createPost: async (
      parent,
      { input },
      { db: { postModel }, errorHandler },
      info
    ) =>
      postModel.create({ ...input }).catch((err) => {
        errorHandler(err)
        return null
      }),
    updatePost: async (
      parent,
      { id, input },
      { db: { postModel }, errorHandler },
      info
    ) =>
      postModel
        .update(input, { where: { id } }, { returning: true })
        .then((response) => postModel.findOne({ where: { id } }, { raw: true }))
        .catch((err) => {
          errorHandler(err)
          throw 'deu ruim'
        }),

    deletePost: async (
      parent,
      { id },
      { db: { postModel }, errorHandler },
      info
    ) =>
      postModel
        .destroy({ where: { id } }, { returning: true })
        .then((response) => !!response)
        .catch((err) => {
          errorHandler(err)
          throw 'deu ruim'
        })
  }
}
