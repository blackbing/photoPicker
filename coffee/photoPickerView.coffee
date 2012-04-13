define([
  'module'
  'photoPickerModel'
  'text!../template/photoPicker.hbs'
  'vender/antiscroll/scrollbar'
], (module, photoPickerModel, photoPickerTpl)->
  _selfPrefix = module.id
  View = Backbone.View.extend(
    options:
      id: 'photoPicker'
      width: 220
      height: 200

    initialize: ->
      @model = new photoPickerModel()
      $tpl = @getTemplate()
      @$el.append($tpl)

    events:
      'click li': 'selectPhoto'

    selectPhoto: (event)->
      $target = $(event.currentTarget)
      $("##{@options.id} li.selected").removeClass('selected')
      $target.addClass('selected')
      sIdx = @$('li').index($target)
      sData = @options.thumbnails.contents[sIdx]
      @model.set('selected', sData)
      @remove()

    getTemplate: ->
      thumbnailData = @options.thumbnails
      tpl = Mustache.render(photoPickerTpl, thumbnailData)
      $tpl = $(tpl)

      return $tpl

    remove: ->
      console.log('remove')
      if @$el.data('antiscroll-wrap')
        @$el.detach()
        .data('antiscroll-wrap').remove()
      else
        @$el.detach()


    render: ->
      console.log 'render'
      $('body').append(@$el)
      @$el.css(
        width: @options.width
        height: @options.height
      ).scrollbar( forceVertical: true, showShadow: true )
      @$el.data('HTC.scrollbar', false)
      @$el.data('antiscroll-wrap', @$el.closest('.antiscroll-wrap'))
      console.log 'antiscroll'
      #@$el = @$el.data('antiscroll-wrap')

      @

  )
  #exports
  View
)
