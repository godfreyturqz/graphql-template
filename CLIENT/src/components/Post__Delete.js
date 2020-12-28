import { GET_POSTS, DELETE_POST } from '../queries/queries'
import { useMutation } from '@apollo/client'


const Post__Delete = () => {

    const [deletePost] = useMutation(DELETE_POST, {
        refetchQueries: [{query: GET_POSTS}],
        awaitRefetchQueries: true
    })

    const handleDelete = (id) => {
        deletePost({
            variables: {id}
        })
    }

    return {
        handleDelete
    }
}

export default Post__Delete
