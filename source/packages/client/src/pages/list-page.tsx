import * as React from 'react'
import { QueryComponent, QueryResult } from '../components/query'
import gql from 'graphql-tag'

const query = gql`
  query {
    videos {
      id
      name
      watched
    }
  }
`

export class ListPage extends React.Component<any, any> {
  render() {
    return (
      <QueryComponent query={query}>
        {(data: QueryResult | undefined) => (
          <p>{JSON.stringify(data)} </p>
        )}
      </QueryComponent>
    )
  }
}