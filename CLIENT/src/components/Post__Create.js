import { useState } from 'react'
import { GET_POSTS, CREATE_POST } from '../queries/queries'
import { useMutation } from '@apollo/client'


const Post__Create = () => {

    const [postValue, setPostValue] = useState('')

    // GRAPHQL QUERY
    const [createPost] = useMutation(CREATE_POST, {
        refetchQueries: [{query: GET_POSTS}],
        awaitRefetchQueries: true
    })

    // TEXTAREA AND POST BUTTON
    const handleTextArea = (e) => {
        setPostValue(e.target.value)
    }

    const handleSubmitPost = (e) => {
        e.preventDefault()
        createPost({
            variables: {post: postValue}
        })
        setPostValue('')
    }

    return { postValue, handleTextArea, handleSubmitPost }
}

export default Post__Create
