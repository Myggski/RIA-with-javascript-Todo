define(['underscore','backbone'], function(_, Backbone) {
  
  var Todo = Backbone.Model.extend({
		defaults: {
			title: "",
			created: "",
			completed: false
		},
		title: function(){ return this.get("title"); },
		created: function(){ return this.get("created"); },
		completed: function(){ return this.get("completed"); },
		validate: function(attr, options){
          	if(!attr.title.match(/^[a-zåäö\s]*$/i)){
          		return "Wrong format"; // TODO: better help-errors
          	}
			else if(attr.title.trim().length < 1 || attr.title.trim().length > 12){
				return "It's to long or to short";
			}
		}

	});
  return Todo;
});