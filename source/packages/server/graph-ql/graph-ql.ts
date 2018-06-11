import * as express from 'express'
import * as graphqlHTTP from 'express-graphql'
import { schema } from './schema'

export const graphQL = express.Router()
graphQL.use('/', graphqlHTTP(req => ({
  schema,
  graphiql: true,
})))
