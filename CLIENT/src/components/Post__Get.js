import { GET_POSTS } from '../queries/queries'
import { useQuery } from '@apollo/client'


const Post__Get = () => {

    const { loading, error, data } = useQuery(GET_POSTS)


    return {
        loading,
        data,
        error
    }
}

export default Post__Get
