import React from 'react'
// LOGIC
import Post__Get from './Post__Get'
// COMPONENTS
import PostElement from './PostElement'
import Loading from './Loading'
import Error from './Error'
import PostCreate from './PostCreate'


const Post = () => {

    const { loading, data, error } = Post__Get()

    return (
        <div>
            <PostCreate />
            <h3>Posts</h3>
            {
                loading ? <Loading /> :
                error ? <Error error={error.message}/> :
                data?.posts.map(props => <PostElement key={props.id} {...props}/>)
            }
        </div>
    )
}

export default Post
