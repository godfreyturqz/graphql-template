import React from 'react'
import Post__Create from './Post__Create'

const PostCreate = () => {

    const {postValue, handleTextArea, handleSubmitPost} = Post__Create()
    
    return (
        <>
            <h1>What's on your mind?</h1>
            <form onSubmit={handleSubmitPost}>
                <textarea cols="30" rows="5" onChange={handleTextArea} value={postValue}/>
                <button>Post</button>
            </form>
            <hr/>
        </>
    )
}

export default PostCreate
