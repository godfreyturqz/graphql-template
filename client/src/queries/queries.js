import { gql } from 'apollo-boost'


export const getBooksQuery = gql`
    {
        books{
            id
            authorId
            title
            genre
        }
    }
`

export const getAuthorsQuery = gql`
    {
        authors{
            id
            name
            age
        }
    }
`

export const addBookMutation = gql`
    mutation {
        addBook(name: "", genre: "", author: ""){
            name
            id
        }
    }
`