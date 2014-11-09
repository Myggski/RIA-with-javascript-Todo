// This is the main-view, more info will come in time
define(["jade!templates/nav","backbone", "jquery", "jquery.bootstrap"] , function(template, Backbone, $) {
  var contentView = Backbone.View.extend({
    template: template,
    render: function (){
      this.$el.empty();
      this.$el.append(template());
      return this;
  }
    });
    return contentView;
});
