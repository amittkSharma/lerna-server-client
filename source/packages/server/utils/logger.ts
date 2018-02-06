import * as bunyan from 'bunyan'

const level = (process.env.BUNYAN_LOG_LEVEL || 'info') as bunyan.LogLevel
export const log = bunyan.createLogger({
  name: 'server',
  level,
})

// disable logging in unit tests
if (process.env.NODE_ENV === 'test') {
  log.level('fatal')
}

if (!('NODE_ENV' in process.env)) {
  log.level('debug')
}
