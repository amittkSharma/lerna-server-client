import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import { client } from './api/gql-client'
import { ListPage } from './pages/list-page'
import './App.css'

export const App = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Video Library</h1>
      </header>
      <ListPage />
    </div>
  </ApolloProvider>
)
