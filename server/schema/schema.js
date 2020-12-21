const graphql = require('graphql')

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLID
} = graphql

const books =[
    {id: '1', name: 'War', genre: 'action', authorId: 1},
    {id: '2', name: 'Peace', genre: 'action', authorId: 2}
]

const authors =[
    {id: '1', name: 'Robert', age: 34},
    {id: '2', name: 'Mark', age: 34}
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parent, args){
                return authors.find(item => item.id === parent.id)
            }
        }
    })
})

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id : { type: GraphQLID },
        name : { type: GraphQLString },
        age : { type: GraphQLInt },
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                return books.find(item => item.id === args.id)
            }
        },
        author: {
            type: AuthorType,
            args: { id : { type: GraphQLID } },
            resolve(parent, args){
                return authors.find(item => item.id === args.id)
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})
