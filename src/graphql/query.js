import UserQuery from './modules/user/userQuery'

const Query = `
    type Query{
        ${UserQuery}
    }
`

export default Query
