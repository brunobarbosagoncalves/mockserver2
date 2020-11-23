import UserMutation from './modules/user/userMutation'

const Mutation = `
    type Mutation{
        ${UserMutation}
    }
`

export default Mutation
