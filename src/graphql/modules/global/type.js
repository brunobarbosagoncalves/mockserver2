export default `

    enum DIRECTION {
        ASC
        DESC
    }
    enum CONDITIONTYPE {
        ONE
        MANY
    }

    input PaginationInput{
        limit: Int = 10
        offset: Int = 0
    }

    input OrderInput{
        field: String!
        direction: DIRECTION!
    }

    input ConditionInput{
        #conditionType: CONDITIONTYPE!
        operator: String!
        field: String!
        value: String!
    }

    input QueryInput {
        pagination: PaginationInput!
        order: [OrderInput]
        #condition: [ConditionInput]
    }

`
