(function() {

  define(['module'], function(module) {
    var Model, _selfPrefix;
    _selfPrefix = module.id;
    Model = Backbone.Model.extend({
      initialize: function() {
        return console.log(_selfPrefix, 'initialize');
      }
    });
    return Model;
  });

}).call(this);
