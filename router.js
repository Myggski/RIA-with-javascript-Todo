// This is the Router
define(['jquery', 'underscore', 'backbone', "scripts/views/masterView", "scripts/collections/todos"], function($, _, Backbone, MasterView, Todos){
	var AppRouter = Backbone.Router.extend({ // Adding some routes
		initialize: function(){
			this.todos = new Todos();
			Backbone.history.start();
		},
		routes: {
		'todo/:id': 'todo',
		'*actions': 'index'

		},
		index: function(){
			var masterView = new MasterView({el: ".main", collection: this.todos});
			this.todos.fetch({
				success: function(tasks){
          			$(".main").append(masterView.render().el).show();
          			$("#todo").focus();
        		}
			});
		},
		todo: function(id){

			this.todos.fetch({
				success: function(todos){
					var todo = todos.get(id);
					$(".main").empty();
					$(".main").append("<h2>"+id+"</h2> <a href='index.html'>"+todo.get("title")+ " </a>");
					$(".main").show();
				}
			});
		}

	});
	return AppRouter;
});