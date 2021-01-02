import './App.css'
import { ApolloProvider } from '@apollo/client'
import { client } from './apollo/config'
// COMPONENTS
import Post from './components/Post'


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="app">
        <Post/>
      </div>
    </ApolloProvider>
  );
}

export default App
