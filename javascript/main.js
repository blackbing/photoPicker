(function() {

  require(['jquery.photoPicker', 'data/thumbnailData'], function(PhotoPicker, thumbnailData) {
    console.log('main');
    return $('img').photoPicker({
      thumbnails: thumbnailData
    });
  });

}).call(this);
