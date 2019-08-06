

window.onload = function (){

	function sendAjax() {
	    var	model = { 
	    	name: 'menu', 
	    	type: 'row',

	    	items: [ 

	    	{ 	title: 'title 1', 
	    		handler: 'ActionAdd', 

	    	 },

	    	{ 	title: 'title 2',
	    		handler: 'ActionSaveAs',


	    	 },

	    	{ 	title: 'title 3',
	    		handler: 'ActionExit',


	    	 }
	    	] 
	    };

	    var actions = {

		 	ActionAdd: function() {
		 		console.log('ActionAdd');
		 	},

		 	ActionSaveAs: function() {
		 		console.log('ActionSaveAs');
		 	},

		 	ActionExit: function() { 
		 		console.log('ActionExit');
		 	}
 		}
	    return model;
	    return actions;
	}







    function createMenu(model) {
    	var ul = document.createElement('ul');
    	ul.classList.add('menu');

    	console.log(model);

    	for(var i = 0; i < model.items.length; i++){

    		var li = document.createElement('li');
    		li.classList.add('item');
    		li.innerHTML = model.items[i].title;
    		ul.append(li);
    		var state = null;

            if(model.type == 'column' ) {
                state = model.type? 'column' : 'row';
                ul.classList.add('column');
            }


    	}
    	document.body.append(ul);


    var model = sendAjax();    


    createMenu (model);
}

}