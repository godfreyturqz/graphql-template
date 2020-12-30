import { useState } from 'react'
import { GET_POSTS, GET_POST_DETAILS, UPDATE_POST } from '../queries/queries'
import { useLazyQuery, useMutation } from '@apollo/client'


const Post__Update = () => {

    const [onUpdate, setOnUpdate] = useState(false)
    const [updateValue, setUpdateValue] = useState({})

    // GRAPHQL QUERY
    const [getPostDetails, { data }] = useLazyQuery(GET_POST_DETAILS, {
        onCompleted: () => setUpdateValue(data.post)
    })
    const [updatePost] = useMutation(UPDATE_POST, {
        
    })

    //EDIT BUTTON
    const handleEdit = (id) => {
        getPostDetails({ variables: {id},
            refetchQueries: [{query: GET_POSTS}],
        awaitRefetchQueries: true
         })
        setOnUpdate(!onUpdate)
    }

    // INPUT ON CHANGE
    const handleInputUpdate = (e) => {
        setUpdateValue({...updateValue, post: e.target.value})
    }

    // CANCEL BUTTON
    const handleCancelEdit = (params) => {
        setOnUpdate(!onUpdate)
    }
    

    // UPDATE BUTTON
    const handleSubmitUpdate = () => {
        updatePost({ variables: {id: updateValue.id, post: updateValue.post} })
        setOnUpdate(!onUpdate)
    }
    

    return { onUpdate, updateValue, handleEdit, handleInputUpdate, handleCancelEdit, handleSubmitUpdate }
}

export default Post__Update
