// This is the createtodo-view, more info will come in time
define(['backbone', "jquery", "jade!templates/todoForm", "scripts/models/todo"] , function(Backbone, $, template, Todo) {
  var contentView = Backbone.View.extend({
    template: template,
    events: {
      "keypress #todo": "add",
      "click #addTask": "add"
    },
    add: function(e){
      if(e.which === 13 || e.which === 1 && e.currentTarget.id === "addTask"){
        this.input = this.$el.find("#todo").val().trim();
        var model = new Todo( { id: _.uniqueId(), title: this.input, created: new Date()} );

        if (model.isValid()) {
          this.collection.create(model);
        }
        else if(!model.isValid()){
          // Add error messages
          console.log(model.validationError);
        }
        this.$el.find("#todo").val("");
      }
    },

    render: function (){
      this.$el.empty();
      this.$el.append(template());
      return this;
  }
    });
    return contentView;
});
