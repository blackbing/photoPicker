(function() {

  define(['photoPicker'], function(PhotoPicker) {
    var $photoPicker, init, photoPicker, _currentSelect;
    photoPicker = null;
    $photoPicker = $('<div id="photoPicker" />');
    init = function(opts) {
      var _opts;
      _opts = jQuery.extend(opts, {
        'el': $photoPicker
      });
      photoPicker = new PhotoPicker(_opts);
      return photoPicker.model.bind('change:selected', function(model, data, evt) {
        var src;
        console.log('change:selected', arguments);
        src = data.src;
        if (_currentSelect) return _currentSelect.attr('src', src);
      });
    };
    _currentSelect = null;
    return jQuery.fn.photoPicker = function(opts) {
      var $this;
      if (!photoPicker) init.apply(this, arguments);
      console.log('fn', photoPicker);
      $this = this;
      console.log($this);
      $this.on('click', function(event) {
        console.log('click', event.currentTarget);
        photoPicker.show();
        _currentSelect = $(event.currentTarget);
        return event.stopPropagation();
      });
      return $(document).on('click', function(event) {
        var $target;
        $target = $(event.target);
        if (!$target.closest('#photoPicker').length) return photoPicker.hide();
      });
    };
  });

}).call(this);
