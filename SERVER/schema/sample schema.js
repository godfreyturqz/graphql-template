// const BookType = new GraphQLObjectType({
//     name: 'Book',
//     fields: () => ({
//         _id: {type: GraphQLID},
//         authorId: {type: GraphQLID},
//         title: {type: GraphQLString},
//         author: {
//             type: AuthorType,
//             resolve(parent, args){
//                 // return authors.find(item => item.id === parent.id)
//                 return AuthorModel.findById(parent.authorId)
//             }
//         }
//     })
// })

// const AuthorType = new GraphQLObjectType({
//     name: 'Author',
//     fields: () => ({
//         _id : {type: GraphQLID},
//         name : {type: GraphQLString},
//         age : {type: GraphQLInt},
//         books: {
//             type: new GraphQLList(BookType),
//             resolve(parent, args){
//                 // return books
//                 return BookModel.find({authorId: parent._id})
//             }
//         }
//     })
// })

// const RootQuery = new GraphQLObjectType({
//     name: 'RootQueryType',
//     fields: {
//         book: {
//             type: BookType,
//             args: { _id: { type: GraphQLID } },
//             resolve(parent, args){
//                 // return books.find(item => item.id === args.id)
//                 return BookModel.findById(args._id)
//             }
//         },
//         author: {
//             type: AuthorType,
//             args: { _id : { type: GraphQLID } },
//             resolve(parent, args){
//                 // return authors.find(item => item.id === args.id)
//                 return AuthorModel.findById(args._id)
//             }
//         },
//         books: {
//             type: new GraphQLList(BookType),
//             resolve(parent, args){
//                 // return books
//                 return BookModel.find({})
//             }
//         },
//         authors: {
//             type: new GraphQLList(AuthorType),
//             resolve(parent, args){
//                 // return authors
//                 return AuthorModel.find({})
//             }
//         }
//     }
// })

// const Mutation = new GraphQLObjectType({
//     name: 'Mutation',
//     fields: {
//         addAuthor: {
//             type: AuthorType,
//             args: {
//                 name: {type: new GraphQLNonNull(GraphQLString)},
//                 age: {type: new GraphQLNonNull(GraphQLInt)}
//             },
//             resolve(parent, args){
//                 const data = AuthorModel.create({
//                     name: args.name,
//                     age: args.age
//                 })
//                 return data
//             }
//         },
//         addBook: {
//             type: BookType,
//             args: {
//                 authorId: {type: new GraphQLNonNull(GraphQLID)},
//                 title: {type: new GraphQLNonNull(GraphQLString)}
//             },
//             resolve(parent, args){
//                 const data = BookModel.create({
//                     authorId: args.authorId,
//                     title: args.title,
//                     genre: args.genre
//                 })
//                 return data
//             }
//         }
//     }
// })

