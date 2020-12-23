const graphql = require('graphql')
const BookModel = require('../models/BookModel')
const AuthorModel = require('../models/AuthorModel')


const {
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLList,
    GraphQLID,
    GraphQLString,
    GraphQLInt
} = graphql

//-------------------------------------------------------------
// SAMPLE DATA
// const books =[
//     {id: '1', title: 'War', genre: 'history', authorId: 1},
//     {id: '2', title: 'Origin', genre: 'fiction', authorId: 2}
// ]

// const authors =[
//     {id: '1', name: 'Robert Greene', age: 50},
//     {id: '2', name: 'Dan Brown', age: 40}
// ]
//-------------------------------------------------------------

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLID},
        authorId: {type: GraphQLID},
        title: {type: GraphQLString},
        genre: {type: GraphQLString},
        author: {
            type: AuthorType,
            resolve(parent, args){
                // return authors.find(item => item.id === parent.id)
                return AuthorModel.findById(parent.authorId)
            }
        }
    })
})

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id : {type: GraphQLID},
        name : {type: GraphQLString},
        age : {type: GraphQLInt},
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
                // return books
                return BookModel.find({authorId: parent.id})
            }
        }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
                // return books.find(item => item.id === args.id)
                return BookModel.findById(args.id)
            }
        },
        author: {
            type: AuthorType,
            args: { id : { type: GraphQLID } },
            resolve(parent, args){
                // return authors.find(item => item.id === args.id)
                return AuthorModel.findById(args.id)
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
                // return books
                return BookModel.find({})
            }
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve(parent, args){
                // return authors
                return AuthorModel.find({})
            }
        }
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addAuthor: {
            type: AuthorType,
            args: {
                name: {type: GraphQLString},
                age: {type: GraphQLInt}
            },
            resolve(parent, args){
                const data = AuthorModel.create({
                    name: args.name,
                    age: args.age
                })
                return data
            }
        },
        addBook: {
            type: BookType,
            args: {
                authorId: {type: GraphQLID},
                title: {type: GraphQLString},
                genre: {type: GraphQLString}
            },
            resolve(parent, args){
                const data = BookModel.create({
                    authorId: args.authorId,
                    title: args.title,
                    genre: args.genre
                })
                return data
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})
