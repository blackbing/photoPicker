require([
  'jquery.photoPicker'
  'data/thumbnailData'
], (PhotoPicker, thumbnailData)->
  console.log 'main'


  $('img').photoPicker(
    thumbnails: thumbnailData
  )

)
