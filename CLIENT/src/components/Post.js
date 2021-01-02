import React from 'react'
// LOGIC
import Post__Get from './Post__Get'
import Post__Create from './Post__Create'
import Post__Update from './Post__Update'
import Post__Delete from './Post__Delete'
// COMPONENTS
import PostEdit from './PostEdit'


const Post = () => {

    const { loading, data, error } = Post__Get()
    const { postValue, handleTextArea, handleSubmitPost } = Post__Create()
    const { handleEdit, isModalOpen, setIsModalOpen, updateValue, handleInputUpdate, handleSubmitUpdate } = Post__Update()
    const { handleDelete } = Post__Delete()


    return (
        <div>
            <h1>What's on your mind?</h1>
            <form onSubmit={handleSubmitPost}>
                <textarea cols="30" rows="5" onChange={handleTextArea} value={postValue}/>
                <button>Post</button>
            </form>
            <hr/>
            <h3>Posts</h3>
            {
                loading ? <div>Loading...</div>:
                error ? <div>Error! {error.message}</div> :
                data?.posts.map(({id, post}) => 
                    <div key={id}>
                        <br/>
                        <div>{post}</div>
                        <button onClick={() => handleEdit(id)}>Edit</button>
                        <button onClick={() => handleDelete(id)}>Delete</button>
                        <PostEdit 
                            isModalOpen = {isModalOpen}
                            setIsModalOpen = {setIsModalOpen}
                            updateValue = {updateValue}
                            handleInputUpdate = {handleInputUpdate}
                            handleSubmitUpdate = {handleSubmitUpdate}
                        />
                    </div>
                )
            }
        </div>
    )
}

export default Post
