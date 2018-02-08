import * as uuid from 'uuid'
import * as fs from 'fs'
import { config } from '../config'

class SampleDataGenerator {

  generateDataList(itemCount: number) {
    const data: any[] = []
    for (let i = 0; i < itemCount; i++) {
      const id = uuid()
      data.push({
        id,
        name: `${config.sampleDataPrefix}_${id}`,
        description: `This ${config.sampleDataPrefix} is has the id: ${id}`,
        watched: true,
        authorName: `Author_${id}`,
        url: `http://www.sampledata.com/${id}`,
      })
    }

    if (!fs.existsSync(`${config.filePath}`)) {
      fs.mkdirSync(`${config.filePath}`)
    }

    fs.writeFileSync(`${config.filePath}/${config.fileName}`, JSON.stringify(data, null, 2))
  }
}

export const sampleDataGenerator = new SampleDataGenerator()
