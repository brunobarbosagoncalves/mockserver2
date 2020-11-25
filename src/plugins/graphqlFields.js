import graphqlFields from 'graphql-fields'

export default (info, include = ['id'], exclude = []) => {
  //get fields from info graphql
  let fields = Object.keys(graphqlFields(info))
  //include fields list
  fields = fields.concat(include)
  //remove exclude fields
  fields = fields.filter((field) => !exclude.includes(field))
  //remove duply
  fields = fields.filter((value, index, self) => self.indexOf(value) === index)

  return fields
}
