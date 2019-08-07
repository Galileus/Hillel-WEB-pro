


window.onload = function(){
    var box = document.querySelector('.box');

    box.addEventListener('click', function() {
        box.classList.toggle('active');
        
    }); 

    document.addEventListener('click', function(e) {
      console.log(e.clientY, 'clientY');
      console.log(e.clientX, 'clientX');


      box.style.left = e.clientY + 'px';
      box.style.top = e.clientX + 'px';

    

    });


  }