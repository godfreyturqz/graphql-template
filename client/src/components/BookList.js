import React from 'react'
import { getBooksQuery } from '../queries/queries'
import { graphql } from 'react-apollo'


const BookList = (props) => {


    return (
        <div>
            <ul id="book-list">
                {
                    props.data.loading ? <div>Loading</div> :
                    props.data.books && props.data.books.map(item => 
                    <li key={item.id}>{item.title}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default graphql(getBooksQuery)(BookList)
