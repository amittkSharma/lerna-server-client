import * as React from 'react'
import { ApolloProvider } from 'react-apollo'
import { client } from './api/gql-client'
import { BrowserRouter as Router, Switch, Route, Redirect  } from 'react-router-dom'
import { GenericPages } from './pages/generic-pages'
import './App.css'

export const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <Redirect to="/list/entertainment/video"/>
        </Route>
        <GenericPages />
      </Switch>
    </Router>
  </ApolloProvider>
)
