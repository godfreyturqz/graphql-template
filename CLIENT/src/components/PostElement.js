import React from 'react'
import Post__Update from './Post__Update'
import Post__Delete from './Post__Delete'

import PostEdit from './PostEdit'

const PostElement = ({id, post}) => {

    const { handleEdit, ...postUpdateProps } = Post__Update()
    const { handleDelete } = Post__Delete()

    return (
        <div>
            <br/>
            <div>{post}</div>
            <button onClick={() => handleEdit(id)}>Edit</button>
            <button onClick={() => handleDelete(id)}>Delete</button>
            <PostEdit {...postUpdateProps} />
        </div>
    )
}

export default PostElement
