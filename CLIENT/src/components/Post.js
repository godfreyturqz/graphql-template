import React, { useState } from 'react'
import { GET_POSTS, CREATE_POST, GET_POST_DETAILS, DELETE_POST } from '../queries/queries'
import { useQuery, useLazyQuery, useMutation } from '@apollo/client'


const Post = () => {

    const [post, setPost] = useState('')
    const {loading, error, data} = useQuery(GET_POSTS)
    const [getDetails, {data: details}] = useLazyQuery(GET_POST_DETAILS)

    const [createPost] = useMutation(CREATE_POST, {
        refetchQueries: [{query: GET_POSTS}],
        awaitRefetchQueries: true
    })
    const [deletePost] = useMutation(DELETE_POST, {
        refetchQueries: [{query: GET_POSTS}],
        awaitRefetchQueries: true
    })

    const handleInput = (e) => {
        setPost(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        createPost({
            variables: {post}
        })
        setPost('')
    }
    const handleDelete = (id) => {
        deletePost({
            variables: {id}
        })
    }
    const handleDetails = (id) => {
        getDetails({
            variables: {id}
        })
    }


    return (
        <div>
            <h1>What's on your mind?</h1>
            <form onSubmit={handleSubmit}>
                <textarea name="post" cols="30" rows="5" onChange={handleInput} value={post}/>
                <button>Post</button>
            </form>
            {
                details &&
                <div>
                    <hr/>
                    <h3>Details</h3>
                    <div>{JSON.stringify(details)}</div>
                </div>
            }
            <hr/>
            <h3>Posts</h3>
            {
                loading ? <div>Loading...</div>:
                error ? <div>Error! {error.message}</div> :
                data && data.posts.map(item =>
                    <div key={item.id}>
                        <div>{item.post}</div>
                        <button onClick={() => handleDetails(item.id)}>Show Details</button>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </div>
                )
            }
        </div>
    )
}

export default Post
