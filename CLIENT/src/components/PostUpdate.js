import React from 'react'
import Post__Update from './Post__Update'

const PostUpdate = () => {

    const {
        handleEdit,
        updateValue,
        handleInputUpdate,
        handleSubmitUpdate
    } = Post__Update()
 
    

    return (
        <div>
            <div>
                {JSON.stringify(updateValue)}
            </div>
            <input type="text" value={updateValue.post} onChange={handleInputUpdate}/>
            <button onClick={() => handleSubmitUpdate(updateValue.id)}>Update</button>
        </div>
    )
}

export default PostUpdate
