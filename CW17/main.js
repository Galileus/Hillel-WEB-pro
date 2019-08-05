/*window.onload = function(){

  var parents = document.querySelector('.parent, .parentSecond');
  var div = document.createElement('div');

  div.classList.add('block');

  console.dir(div, 'div');

  console.dir(parents, 'parent');

  parents.appendChald(div);

  for(var i = 0; i < parents.length; i++){
    va
  }  

}*/


window.onload = function() {


    function sendAjax() {

        var	model = { 
        	name: 'menu', 
        	type: 'row|column',

        	items: [ 

        	{ title: 'title 1' },

        	{ title: 'title 2', },

        	{ title: 'title 3', }

        	] 
        };	

        return model;

    }

    function createMenu(model) {
    	console.log(model);
    	var menu = document.createElement('ul');

    	for(var i = 0; i < model.items.length; i++) {
            var li = document.createElement('li');
        

		    li.classList.add(model.name + '-item');
		    li.innerHTML = model.items[i].title;
		    menu.append(li);  
		}
		document.body.append(menu);
    }

    var foo = sendAjax();

    createMenu(foo);


} 