define([
  'photoPickerView'
], (photoPickerView)->

  class PhotoPicker
    constructor: (opts)->

      @view = new photoPickerView(opts)
      #export model
      @model = @view.model

    show: ()->
      @view.render()

    hide: ()->
      @view.remove()
      console.log 'hide'



  #exports
  PhotoPicker

)
