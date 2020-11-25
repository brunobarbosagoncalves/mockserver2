import { mergeTypeDefs } from '@graphql-tools/merge'

import userType from './modules/user/type'
import postType from './modules/post/type'

export default mergeTypeDefs([userType, postType])
