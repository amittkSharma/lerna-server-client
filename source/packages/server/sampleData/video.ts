const VIDEOS = [
  {
    id: 'a',
    name: 'Create a GraphQL Schema',
    watched: true,
  },
  {
    id: 'b',
    name: 'Ember.js CLI',
    watched: false,
  },
]

class VideoSampleData {

  private videos: any = []
  constructor() {
    this.videos = VIDEOS
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
