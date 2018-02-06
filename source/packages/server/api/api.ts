import * as express from 'express'
import * as  readJson from 'read-package-json'

export const api = express.Router()
api.get('/version', getVersion)

function getVersion(req: any, res) {
  readJson('./package.json', console.error, false, (er, data) => {
    if (er) {
      console.error(`There was an error reading the file ${er}`)
    }
    res.json({ version: data.version, node: process.version })
  })
}
