import * as React from 'react'
import { Switch , Route } from 'react-router-dom'
import { ListPage } from './list-page/list-page'

export const GenericPages = () => (
  <Switch>
    <Route path="/list/:domain/:className" component={ListPage} />
  </Switch>
)