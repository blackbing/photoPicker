define([
  'photoPicker'
], (PhotoPicker)->

  photoPicker = null

  $photoPicker = $('<div id="photoPicker" />')

  init = (opts)->
    _opts = jQuery.extend(opts, {
      'el': $photoPicker
    })
    photoPicker = new PhotoPicker(_opts)
    photoPicker.model.bind('change:selected', (model, data, evt)->
      console.log('change:selected', arguments)
      src = data.src
      if(_currentSelect)
        _currentSelect.attr('src', src)

    )

  _currentSelect = null

  jQuery.fn.photoPicker = (opts)->
    if(not photoPicker)
      init.apply(@, arguments)

    console.log 'fn', photoPicker
    $this = @
    console.log $this
    $this.on('click', (event)->
      console.log('click', event.currentTarget)


      photoPicker.show()
      _currentSelect = $(event.currentTarget)
      event.stopPropagation()
    )
    $(document).on('click', (event)->
      $target = $(event.target)
      if !$target.closest('#photoPicker').length
        photoPicker.hide()
    )





)
