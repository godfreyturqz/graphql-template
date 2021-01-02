import { useState } from 'react'
import { GET_POSTS, GET_POST_DETAILS, UPDATE_POST } from '../queries/queries'
import { useLazyQuery, useMutation } from '@apollo/client'


const Post__Update = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [updateValue, setUpdateValue] = useState({})

    // GRAPHQL QUERY
    const [getPostDetails, { data }] = useLazyQuery(GET_POST_DETAILS, {
        refetchQueries: [{query: GET_POSTS}],
        awaitRefetchQueries: true,
        onCompleted: () => setUpdateValue(data.post)
    })

    const [updatePost] = useMutation(UPDATE_POST, {
        refetchQueries: [{query: GET_POSTS}],
        awaitRefetchQueries: true
    })

    //EDIT BUTTON
    const handleEdit = (id) => {
        getPostDetails({ variables: {id} })
        setIsModalOpen(!isModalOpen)
    }

    // INPUT ON CHANGE
    const handleInputUpdate = (e) => setUpdateValue({...updateValue, post: e.target.value})

    // UPDATE BUTTON
    const handleSubmitUpdate = () => {
        updatePost({ variables: {id: updateValue.id, post: updateValue.post} })
        setIsModalOpen(!isModalOpen)
    }

    return { handleEdit, isModalOpen, setIsModalOpen, updateValue, handleInputUpdate, handleSubmitUpdate }
}

export default Post__Update
