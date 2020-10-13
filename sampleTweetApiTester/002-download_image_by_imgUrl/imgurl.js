const fs = require('fs')
const request = require('request')

const download = (url, path, callback) => {
  request.head(url, (err, res, body) => {
    request(url)
      .pipe(fs.createWriteStream(path))
      .on('close', callback)
  })
}


const url = 'https://pbs.twimg.com/media/EfiROwlU0AMOrrk.jpg'
const path = './images/image.png'
// const path2 = './images'

download(url, path, () => {
  console.log('✅ Done!')
})