import gql from 'graphql-tag'

export const VIDEO_QUERY = gql`
  query GetAllVideos {
    videos {
      id
      name
      watched
    }
  }
`