import { useState } from 'react'
import { GET_POSTS, CREATE_POST } from '../queries/queries'
import { useMutation } from '@apollo/client'


const Post__Create = () => {

    // CREATE POST
    const [post, setPost] = useState('')
    const [createPost] = useMutation(CREATE_POST, {
        refetchQueries: [{query: GET_POSTS}],
        awaitRefetchQueries: true
    })

    const handleTextArea = (e) => {
        setPost(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createPost({
            variables: {post}
        })
        setPost('')
    }

    return {
        handleTextArea,
        post,
        handleSubmit
    }
}

export default Post__Create
