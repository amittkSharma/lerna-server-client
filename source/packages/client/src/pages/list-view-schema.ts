import { Schema  } from '../models/core'

export const VideoSchema: Schema[] = [
  {
    name: 'Name',
    dataType: 'link',
    propName: 'name',
  },
  {
    name: 'Description',
    dataType: 'string',
    propName: 'description',
  },
  {
    name: 'Url',
    dataType: 'link',
    propName: 'url',
  },
]