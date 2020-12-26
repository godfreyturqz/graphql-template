import React, {useState} from 'react'
import { getAuthorsQuery } from '../queries/queries'
import { graphql } from 'react-apollo'


const AddBook = (props) => {

    const [book, setBook] = useState({
        title: '',
        genre: '',
        authorId: ''
    })

    const handleInputs = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addBookMutation()
    }
    

    console.log(props)
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label>Book name:</label>
                    <input type="text" name='title' onChange={handleInputs}/>
                </div>
                <div className="field">
                    <label>Genre:</label>
                    <input type="text" name='genre' onChange={handleInputs}/>
                </div>
                <div className="field">
                    <label>Author:</label>
                    <select onChange={handleInputs}>
                        <option>Select Author</option>
                        {
                            props.getAuthorsQuery.loading ? <option>Loading...</option> :
                            props.getAuthorsQuery.authors && props.getAuthorsQuery.authors.map(author =>
                                <option value={author.id} key={author.id}>{author.name}</option>
                            )
                        }
                    </select>
                    <button type="submit">Add Book</button>
                </div>
            </form>
        </>
    )
}

export default graphql(getAuthorsQuery)(AddBook)
