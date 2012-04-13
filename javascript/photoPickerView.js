(function() {

  define(['module', 'photoPickerModel', 'text!../template/photoPicker.hbs', 'vender/antiscroll/scrollbar'], function(module, photoPickerModel, photoPickerTpl) {
    var View, _selfPrefix;
    _selfPrefix = module.id;
    View = Backbone.View.extend({
      options: {
        id: 'photoPicker',
        width: 220,
        height: 200
      },
      initialize: function() {
        var $tpl;
        this.model = new photoPickerModel();
        $tpl = this.getTemplate();
        return this.$el.append($tpl);
      },
      events: {
        'click li': 'selectPhoto'
      },
      selectPhoto: function(event) {
        var $target, sData, sIdx;
        $target = $(event.currentTarget);
        $("#" + this.options.id + " li.selected").removeClass('selected');
        $target.addClass('selected');
        sIdx = this.$('li').index($target);
        sData = this.options.thumbnails.contents[sIdx];
        this.model.set('selected', sData);
        return this.remove();
      },
      getTemplate: function() {
        var $tpl, thumbnailData, tpl;
        thumbnailData = this.options.thumbnails;
        tpl = Mustache.render(photoPickerTpl, thumbnailData);
        $tpl = $(tpl);
        return $tpl;
      },
      remove: function() {
        console.log('remove');
        if (this.$el.data('antiscroll-wrap')) {
          return this.$el.detach().data('antiscroll-wrap').remove();
        } else {
          return this.$el.detach();
        }
      },
      render: function() {
        console.log('render');
        $('body').append(this.$el);
        this.$el.css({
          width: this.options.width,
          height: this.options.height
        }).scrollbar({
          forceVertical: true,
          showShadow: true
        });
        this.$el.data('HTC.scrollbar', false);
        this.$el.data('antiscroll-wrap', this.$el.closest('.antiscroll-wrap'));
        console.log('antiscroll');
        return this;
      }
    });
    return View;
  });

}).call(this);
