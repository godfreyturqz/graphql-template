import { gql } from '@apollo/client'


export const GET_POSTS = gql`
    {
        posts {
            id
            post
        }
    }
`
export const GET_POST_DETAILS = gql`
    query ($id: ID!){
        post(id: $id){
            id
            post
        }
    }
`
export const CREATE_POST = gql`
    mutation ($post: String!){
        createPost(post: $post){
            id
            post
        }
    }
`
export const DELETE_POST = gql`
    mutation ($id: ID!){
        deletePost(id: $id){
            id
            post
        }
    }
`