import { encrypt } from '~plugins/encrypt'

export default {
  User: {
    posts: async (
      parent,
      { limit = 10, offset = 0 },
      { db: { postModel }, graphqlFields, postLoader },
      info
    ) => {
      return postLoader.loadMany([{ id: parent.id, config: {} }])

      return postModel.findAll({
        where: { userId: parent.id },
        attributes: graphqlFields(info, ['id', 'userId'], ['user']),
        limit,
        offset
      })
    }
  },
  Query: {
    users: async (
      parent,
      { limit = 10, offset = 0 },
      { db: { userModel }, graphqlFields },
      info
    ) =>
      userModel.findAll({
        attributes: graphqlFields(info, ['id'], ['posts']),
        limit,
        offset
      }),
    user: async (parent, { id }, { db: { userModel }, graphqlFields }, info) =>
      userModel.findOne({
        where: { id },
        attributes: graphqlFields(info, ['id'], ['posts'])
      })
  },
  Mutation: {
    createUser: async (
      parent,
      { input },
      { db: { userModel }, errorHandler },
      info
    ) =>
      userModel.create({ ...input }).catch((err) => {
        errorHandler(err)
        return null
      }),
    updateUser: async (
      parent,
      { id, input },
      { db: { userModel }, errorHandler },
      info
    ) =>
      userModel
        .update(input, { where: { id } }, { returning: true })
        .then((response) => userModel.findOne({ where: { id } }, { raw: true }))
        .catch((err) => {
          errorHandler(err)
          throw 'deu ruim'
        }),

    updateUserPassword: async (
      parent,
      { id, input: { password, newpassword } },
      { db: { userModel }, errorHandler },
      info
    ) => {
      const hashPassword = await encrypt(password)

      return userModel
        .update(
          { password: newpassword },
          { where: { id, password: hashPassword } }
        )
        .then((response) => {
          //row not updated
          if (!!response[0] === false)
            return Error('Row not found updateUserPassword')

          return userModel.findOne({ where: { id } }, { raw: true })
        })
        .catch((err) => {
          errorHandler(err)
          return new Error('Error updateUserPassword')
        })
    },
    deleteUser: async (
      parent,
      { id },
      { db: { userModel }, errorHandler },
      info
    ) =>
      userModel
        .destroy({ where: { id } }, { returning: true })
        .then((response) => !!response)
        .catch((err) => {
          errorHandler(err)
          throw 'deu ruim'
        })
  }
}
