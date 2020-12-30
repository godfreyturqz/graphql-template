import React from 'react'
import Modal from 'react-modal'
import Post__Update from './Post__Update'

const PostEdit = ({id, isModalOpen}) => {

    const { onUpdate, updateValue, handleEdit, handleInputUpdate, handleCancelEdit, handleSubmitUpdate } = Post__Update()

    return (
        <Modal 
            isOpen={isModalOpen}
        >
            {onUpdate ? 

            <>
                <textarea name="" id="" cols="30" rows="5" onChange={handleInputUpdate} value={updateValue.post}></textarea>
                <button onClick={handleCancelEdit}>Cancel Edit</button>
                <button onClick={handleSubmitUpdate}>Update</button>
            </> :
            <>
                
                <button onClick={() => handleEdit(id)}>Edit</button>
            </>}

        </Modal>
    )
}

export default PostEdit
