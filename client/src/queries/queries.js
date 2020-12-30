import { gql } from '@apollo/client'


export const GET_POSTS = gql`
    query {
        posts{
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
    mutation createPost($post: String!){
        createPost(post: $post){
            id
            post
        }
    }
`
export const UPDATE_POST = gql`
    mutation updatePost($id: ID!, $post: String!){
        updatePost(id: $id, post: $post){
            id
            post
        }
    }
`
export const DELETE_POST = gql`
    mutation deletePost($id: ID!){
        deletePost(id: $id){
            id
            post
        }
    }
`