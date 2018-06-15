import * as React from 'react'
import { QueryResult, Query } from 'react-apollo'
import { ListView } from '../components/list-view'
import { VIDEO_QUERY  } from './list-page-gql'
import { GetAllVideosQuery } from '../api/gql-query-interfaces'

export const ListPage = () => (
  <Query query={VIDEO_QUERY}>
    {({data}: QueryResult<GetAllVideosQuery>) => {
      const videos = data && data.videos
      if (data && videos) {
        return (
          <div>
            <main className="team-vs-team">
              <ListView data={videos} />
            </main>
          </div>
        )
      }
      return <div>No Data</div>
    }}
  </Query>
)
