import { sampleDataGenerator } from './lib/sample-data-generator'
import { config } from './config'

async function run() {
  sampleDataGenerator.generateDataList(config.itemCount)
}

run()
