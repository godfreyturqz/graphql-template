import React, { useState } from 'react'
// LOGIC
import Post__Get from './Post__Get'
import Post__Create from './Post__Create'
import Post__Update from './Post__Update'
import Post__Delete from './Post__Delete'
// COMPONENTS
import PostEdit from './PostEdit'


const Post = () => {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const { loading, data, error } = Post__Get()
    const { postValue, handleTextArea, handleSubmitPost } = Post__Create()
    const { onUpdate, updateValue, handleEdit, handleInputUpdate, handleCancelEdit, handleSubmitUpdate } = Post__Update()
    const { handleDelete } = Post__Delete()


    return (
        <div>
            <h1>What's on your mind?</h1>
            <form onSubmit={handleSubmitPost}>
                <textarea name="post" cols="30" rows="5" onChange={handleTextArea} value={postValue}/>
                <button>Post</button>
            </form>
            <hr/>
            <h3>Posts</h3>
            {
                loading ? <div>Loading...</div>:
                error ? <div>Error! {error.message}</div> :
                data && data.posts.map(item => {
                    return (
                        <div key={item.id}>
                            <br/>
                            <div>{item.post}</div>
                            <button onClick={() => handleDelete(item.id)}>Delete</button>
                            <button onClick={() => setIsModalOpen(!isModalOpen)}>Show</button>
                            <PostEdit id={ item.id } isModalOpen={ isModalOpen } />
                        </div>
                    )}
                )
            }
        </div>
    )
}

export default Post
