import * as express from 'express'
import * as graphqlHttp from 'express-graphql'
import * as compression from 'compression'
import * as cors from 'cors'
import * as path from 'path'
import { api } from './api/api'

import { schema } from './graph-ql/schema'

export const app = express()
app.disable('etag').disable('x-powered-by') // Improves performance

app.set('json replacer', (key, value) => value instanceof Set ? Array.from(value) : value)
if (process.env['NODE_ENV'] !== 'production') {
  app.set('json spaces', 2)
}

app.use(cors())
app.use(compression())

app.use('/graphql', graphqlHttp({
  schema,
  graphiql: true,
}))
app.use('/api', api)

app.use(express.static(path.join(__dirname, 'public')))
// app.all('/*', (req, res) => res.sendFile(__dirname + '/public/index.html'))
