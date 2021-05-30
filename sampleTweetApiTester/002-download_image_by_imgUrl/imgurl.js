const fs = require('fs')
const request = require('request')

const download = (url, path, callback) => {
  request.head(url, (err, res, body) => {
    request(url)
      .pipe(fs.createWriteStream(path))
      .on('close', callback)
  })
}

// const url = 'https://pbs.twimg.com/media/EfiROwlU0AMOrrk.jpg'
const url = 'https://video.twimg.com/ext_tw_video/1391478681298558977/pu/vid/640x360/PIqi2GIFAVV37cyE.mp4?tag=12'
// const path = './images/image.png'
const path = './images/video.mp4'
// const path2 = './images'

download(url, path, () => {
  console.log('✅ Done!')
})