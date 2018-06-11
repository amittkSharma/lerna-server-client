import React = require('react')
import { Query } from 'react-apollo'

export interface QueryResult {
  data: any[]
}

interface QueryProps {
  query: any
}

interface QueryPropsWithChildren extends QueryProps {
  children: (props: QueryResult | undefined) => React.ReactNode
}

export const QueryComponent = (props: QueryPropsWithChildren) => (
  <Query query={props.query}>
    {({loading, error, data}) => {
      if (loading) { return <p>Loading...</p> }
      if (error) { return <p>Error :( </p> }
      return props.children(data)
    }}
  </Query>
)