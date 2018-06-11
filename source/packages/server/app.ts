import * as express from 'express'
import * as compression from 'compression'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as path from 'path'
import { api } from './api/api'
import { graphQL } from './graph-ql/graph-ql'

export const app = express()
app.disable('etag').disable('x-powered-by') // Improves performance

app.set('json replacer', (key, value) => value instanceof Set ? Array.from(value) : value)
if (process.env['NODE_ENV'] !== 'production') {
  app.set('json spaces', 2)
}

app.use(cors())
app.use(compression())
app.use(bodyParser.json({limit: '12mb'}))

app.use('/graphql', bodyParser.json(), graphQL)
app.use('/api', api)

app.use(express.static(path.join(__dirname, 'public')))
// app.all('/*', (req, res) => res.sendFile(__dirname + '/public/index.html'))
