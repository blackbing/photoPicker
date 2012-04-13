define([
  'module'
], (module)->
  _selfPrefix = module.id
  Model = Backbone.Model.extend(
    initialize: ->
      console.log _selfPrefix, 'initialize'
  )

  #exports
  Model
)
