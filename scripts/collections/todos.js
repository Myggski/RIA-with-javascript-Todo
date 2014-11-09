define(['underscore','backbone','scripts/models/todo'], function(_, Backbone, Todo){
	var store = new Backbone.LocalStorage(window.store || "Todos");
	
	var Collection = Backbone.Collection.extend({
		model: Todo,
		localStorage: store
	});
	return Collection;
});