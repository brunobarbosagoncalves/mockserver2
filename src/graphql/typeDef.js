import { mergeTypeDefs } from '@graphql-tools/merge'

import globalType from './modules/global/type'
import userType from './modules/user/type'
import postType from './modules/post/type'

export default mergeTypeDefs([globalType, userType, postType])
