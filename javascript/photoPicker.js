(function() {

  define(['photoPickerView'], function(photoPickerView) {
    var PhotoPicker;
    PhotoPicker = (function() {

      function PhotoPicker(opts) {
        this.view = new photoPickerView(opts);
        this.model = this.view.model;
      }

      PhotoPicker.prototype.show = function() {
        return this.view.render();
      };

      PhotoPicker.prototype.hide = function() {
        this.view.remove();
        return console.log('hide');
      };

      return PhotoPicker;

    })();
    return PhotoPicker;
  });

}).call(this);
