window.onload = function(){

var counter = document.querySelector('.counter');
var boxes = document.querySelectorAll('.box');
var res = document.querySelectorAll('.R');


/*setInterval(function(){*/


counter.innerHTML = localStorage.getItem('counter') || 0;


for(var i = 0; i < boxes.length; i++) {
    boxes[i].dataset.id = i ;

    



    boxes[i].querySelector('.counter').innerHTML  =  localStorage.getItem('counter' + boxes[i].dataset.id);

    boxes[i].addEventListener('click', function(event) {
        var counter = event.target.nextElementSibling;
        localStorage.setItem('counter' +  this.dataset.id, ++counter.innerHTML)

    });

    res[i].addEventListener('click', function(){    	

    	localStorage.setItem('counter' + this.dataset.id, 0);

    	console.log(boxes[0].dataset.id, 'this.dataset.id');


    	
    });



}



    // }, 1000);

}