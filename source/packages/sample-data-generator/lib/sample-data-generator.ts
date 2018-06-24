import * as uuid from 'uuid'
import * as fs from 'fs'
import { config } from '../config'

interface Ref {
  id: string,
  label: string
}

class SampleDataGenerator {

  generateArrayData(prefix: string, count: number): Ref[] {
    const data: Ref[] = []
    for (let i = 0; i < count; i++) {
      const id = uuid()
      data.push({
        id,
        label: `${prefix}_${id}`,
      })
    }
    return data
  }

  generateDataList(itemCount: number) {
    const data: any[] = []
    const cast: Ref[] = this.generateArrayData('Cast', 10)
    const writers: Ref[] = this.generateArrayData('Writer', 5)
    for (let i = 0; i < itemCount; i++) {
      const id = uuid()
      const rating = i
      data.push({
        id,
        name: `${config.sampleDataPrefix}_${id}`,
        cast,
        rating,
        watched: true,
        directorName: `Director_${id}`,
        writers,
        description: `This ${config.sampleDataPrefix} is has the id: ${id}`,
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
