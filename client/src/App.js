import './App.css';
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

import BookList from './components/BookList'
import AddBook from './components/AddBook'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>Reading List</h1>
        <BookList/>
        <AddBook/>
      </div>
    </ApolloProvider>
  );
}

export default App;
