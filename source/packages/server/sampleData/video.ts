import * as fs from 'fs'
import { config } from '../config'

class VideoSampleData {

  private videos: any = []
  constructor() {
    console.info('file name', config.sampleDataFile)
    const data = fs.readFileSync(config.sampleDataFile, 'utf8')
    this.videos = JSON.parse(data)
  }

  getVideos() {
    return new Promise((resolve, reject) => {
      resolve(this.videos)
    })
  }

  getVideoById(id: number) {
    return new Promise((resolve, reject) => {
      const [video] = this.videos.filter(vid => {
        return vid.id === id
      })
      resolve(video)
    })
  }

  getVideoByName(name: string) {
    return new Promise((resolve, reject) => {
      const [video] = this.videos.filter(vid => {
        return vid.name === name
      })
      resolve(video)
    })
  }

  createVideo(data: any) {
    return new Promise((resolve, reject) => {
      this.videos.push(data)
      resolve(data)
    })
  }
}

export const videoSampleData = new VideoSampleData()
