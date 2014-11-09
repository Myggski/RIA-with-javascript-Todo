define(['backbone', "jquery", "underscore", "scripts/views/contentView", "scripts/views/createTodoView", "scripts/views/navView", "jade!templates/main"] , function(Backbone, $, _, ContentView, CreateTodoView, NavView, template) {
	var masterView = Backbone.View.extend({
		 className: 'Content-todo',
		 initialize: function(){
		 	this.$el.empty().hide();
		 	this.$el.append(template());
		 	this.navView = new NavView({el: this.$el.find("#Nav")});
			this.createTodoView = new CreateTodoView({ el: this.$el.find("#TaskInput"), collection: this.collection});
			this.contentView = new ContentView({ el: this.$el.find("#Content"), collection: this.collection});

		},
		render: function(){
			this.navView.render();
			this.createTodoView.render();
			this.contentView.render();
			this.$el.show();
			return this;
		}
	});
	return masterView;
});