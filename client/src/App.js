import './App.css'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
//components
import Post from './components/Post'


//--------------------------------------------------------------
// APOLLO CLIENT 
//--------------------------------------------------------------
const client = new ApolloClient({
  uri: 'http://localhost:5000/api',
  cache: new InMemoryCache()
})

//--------------------------------------------------------------
// APP
//--------------------------------------------------------------
function App() {
  return (
    <ApolloProvider client={client}>
      <Post/>
    </ApolloProvider>
  );
}

export default App
