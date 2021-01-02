import React from 'react'
import Modal from 'react-modal'


const PostEdit = ({
    isModalOpen,
    setIsModalOpen,
    updateValue,
    handleInputUpdate,
    handleSubmitUpdate
}) => {

    return (
        <Modal 
            ariaHideApp={false}
            isOpen={isModalOpen}
        >
            <textarea cols="30" rows="5" onChange={handleInputUpdate} value={updateValue.post}></textarea>
            <button onClick={() => setIsModalOpen(!isModalOpen)}>Cancel Edit</button>
            <button onClick={handleSubmitUpdate}>Update</button>
        </Modal>
    )
}

export default PostEdit
