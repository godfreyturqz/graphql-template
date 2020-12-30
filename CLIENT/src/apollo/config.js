import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
    link: new HttpLink({
      uri: 'http://localhost:5000/api',
      headers: {
        Authorization: `Bearer`
      }
    }),
    cache: new InMemoryCache()
})