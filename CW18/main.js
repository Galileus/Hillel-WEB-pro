window.onload = function(){

    function createMenu() {

      var ul = document.createElement('ul');
      ul.classList.add('menu', 'hidden');     

      for(var i = 0; i < 3; i++){
        var li = document.createElement('li');
        li.classList.add('item');
        ul.append(li);
      }
        document.body.append(ul);
    }

    document.addEventListener('contextmenu', function(e){
      e.preventDefault();
      var ul = document.querySelector('ul')
        ul.classList.remove('hidden');
        ul.style.left = e.clientX + 'px';
        ul.style.top = e.clientY + 'px';

    });

    document.addEventListener('click', function(e){
      e.preventDefault();
      var li = document.querySelector('li')
        li.classList.add('hidden');
    });







    



createMenu ();
  }