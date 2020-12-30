// How BookType connects to AuthorType and vice-versa

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: {type: GraphQLID},
        authorId: {type: GraphQLID},
        title: {type: GraphQLString},
        author: {
            type: AuthorType,
            resolve(parent, args){
                return AuthorModel.findById(parent.authorId)
            }
        }
    })
})

// BooktType field returns...
// {
//     id
//     authorId
//     title
//     author {
//         id
//         name
//         age
//         books [
//             {
//                 id
//                 authorId
//                 title
//             },
//             {....},
//             {....}  
//         ]
//     }
// }

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id : {type: GraphQLID},
        name : {type: GraphQLString},
        age : {type: GraphQLInt},
        books: {
            type: new GraphQLList(BookType),
            resolve(parent, args){
                return BookModel.find({authorId: parent._id})
            }
        }
    })
})