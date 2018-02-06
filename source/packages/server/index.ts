import { app } from './app'
import { config } from './config'
import * as http from 'http'
import { log } from './utils/logger'

process.on('unhandledRejection', (reason, p) => {
    log.error('Unhandled Rejection at: Promise ', p, ' reason: ', reason)
})
const server = http.createServer(app as any)
server.listen(config.serverPort, () => {
  log.info('Starting server at port ' + config.serverPort)
})
