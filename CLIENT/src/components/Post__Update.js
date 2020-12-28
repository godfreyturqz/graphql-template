import { useState, useEffect } from 'react'
import { GET_POSTS, GET_POST_DETAILS, UPDATE_POST } from '../queries/queries'
import { useLazyQuery, useMutation } from '@apollo/client'


const Post__Update = () => {

    const [updateValue, setUpdateValue] = useState('')

    const [getDetails, { data }] = useLazyQuery(GET_POST_DETAILS)

    const handleEdit = (id) => {
        getDetails({
            variables: {id}
        })
    }

    const handleInputUpdate = (e) => {
        setUpdateValue(e.target.value)
    }

    // UPDATE
    const [updatePost] = useMutation(UPDATE_POST, {
        refetchQueries: [{query: GET_POSTS}],
        awaitRefetchQueries: true
    })

    const handleSubmitUpdate = (id) => {
        updatePost({
            variables: {id, post: updateValue.post}
        })
    }

    useEffect(() => {

        if(data){
            console.log(data.post)
            setUpdateValue(data.post)
        }

    }, [data])
    
    
    return {
        handleEdit,
        updateValue,
        handleInputUpdate,
        handleSubmitUpdate
    }
}

export default Post__Update
