const graphql = require('graphql')
const PostModel = require('../models/PostModel')

const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLSchema
} = graphql

const PostType = new GraphQLObjectType({
    name: 'Post',
    fields: () => ({
        id: {type: GraphQLID},
        post: {type: GraphQLString}
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        post: {
            type: PostType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLID)}
            },
            async resolve(parent, args){
                const data = await PostModel.findById(args.id)
                return data
            }
        },
        posts: {
            type: new GraphQLList(PostType),
            resolve(parent, args){
                return PostModel.find({})
            }
        }
    }
})
//--------------------------------------------------------------
// CRUD FUNCTION
//--------------------------------------------------------------
const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createPost: {
            type: PostType,
            args: {
                post: {type: new GraphQLNonNull(GraphQLString)}
            },
            async resolve(parent, args){
                const data = await PostModel.create({
                    post: args.post
                })
                return data
            }
        },
        updatePost: {
            type: PostType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLID)},
                post: {type: new GraphQLNonNull(GraphQLString)}
            },
            async resolve(parent, args){
                const data = await PostModel.findByIdAndUpdate(args.id, args.post, {new: true})
                return data
            }
        },
        deletePost: {
            type: PostType,
            args: {
                id: {type: new GraphQLNonNull(GraphQLID)}
            },
            async resolve(parent, args){
                const data = await PostModel.findByIdAndRemove(args.id)
                return data
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})
