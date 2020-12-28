import React from 'react'
// logic
import Post__Get from './Post__Get'
import Post__Create from './Post__Create'
import Post__Update from './Post__Update'
import Post__Delete from './Post__Delete'
// components
import PostUpdate from './PostUpdate'


const Post = () => {

    const { loading, data, error } = Post__Get()
    const { handleTextArea, post, handleSubmit } = Post__Create()
    const { handleEdit } = Post__Update()
    const { handleDelete } = Post__Delete()
    

    return (
        <div>
            <h1>What's on your mind?</h1>
            <form onSubmit={handleSubmit}>
                <textarea name="post" cols="30" rows="5" onChange={handleTextArea} value={post}/>
                <button>Post</button>
            </form>
            <hr/>
            <h3>Posts</h3>
            <PostUpdate {...data}/>
            {
                loading ? <div>Loading...</div>:
                error ? <div>Error! {error.message}</div> :
                data && data.posts.map(item =>
                    <div key={item.id}>
                        <br/>
                        <div>{item.post}</div>
                        <button onClick={() => handleEdit(item.id)}>Edit</button>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </div>
                )
            }
        </div>
    )
}

export default Post
