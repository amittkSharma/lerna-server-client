import * as React from 'react'
import { Switch , Route, RouteComponentProps } from 'react-router-dom'
import { ListPage } from './list-page/list-page'
import { DetailsPage } from './details-page/details-page'

export const GenericPages = () => (
  <Switch>
    <Route path="/list/:domain/:className">
      {({match}: RouteComponentProps<{domain: string, clsName: string}>) => (
          <ListPage
            domain={match.params.domain}
            typeName={match.params.clsName}
          />
      )}
    </Route>
    <Route path="/edit/:domain/:className">
      {({match}: RouteComponentProps<{domain: string, clsName: string}>) => (
          <DetailsPage
            domain={match.params.domain}
            typeName={match.params.clsName}
          />
      )}
    </Route>
  </Switch>
)