

window.onload = function (){

  function sendAjax() {

      var model = { 
        name: 'menu', 
        type: 'row',

        items: [ 

        {   title: 'title 1', 
          handler: 'ActionAdd', 

         },

        {   title: 'title 2',
          handler: 'ActionSaveAs',


         },

        {   title: 'title 3',
          handler: 'ActionExit',


         }],

        actions: [{ 
        ActionAdd: function(){
          console.log('ActionAdd');
        },

        ActionSaveAs: function() {
          console.log('ActionSaveAs');
        },

        ActionExit: function() { 
          console.log('ActionExit');
        }
         }]
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
      
  }

  function createMenu(model) {

      var ul = document.createElement('ul');
      ul.classList.add('menu');
      

      for(var i = 0; i < model.items.length; i++){
        var li = document.createElement('li');        


        li.classList.add('item');
        li.innerHTML = model.items[i].title;
        li.onclick = actions[model.items[i].handler];        

        ul.append(li);

        li.addEventListener('click', function(){            


        })

      }
        document.body.append(ul);

        var state = null;

        if(model.type == 'column' ) {
            state = model.type? 'column' : 'row';
            ul.classList.add('column');
        }



        
    }


    var model = sendAjax();
    createMenu (model);


    function setButton (model){
      var item = document.querySelectorAll('.item');
      console.log(item, 'item'); 


      for(var i = 0; i < item.length;i++ ){
        
        if(model.items[i].handler == 'ActionAdd')
        console.log(model.items[i].handler);

        item[i].addEventListener('click', function() {
            this.classList.toggle('active');        

        });   
      }
  }

  setButton(model);

  // console.log(model.actions[0].ActionAdd);

  

  

}



