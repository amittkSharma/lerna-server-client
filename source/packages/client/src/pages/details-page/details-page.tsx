import * as React from 'react'

interface DetailsPageProps {
  domain: string
  typeName: string
}

export const DetailsPage = (props: DetailsPageProps) => (
  <p>hello world {props.domain}</p>
)