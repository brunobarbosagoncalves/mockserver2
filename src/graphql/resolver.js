import { mergeResolvers } from '@graphql-tools/merge'

import userResolver from './modules/user/resolver'
import postResolver from './modules/post/resolver'

export default mergeResolvers([userResolver, postResolver])
