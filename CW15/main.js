
/*console.dir(document.documentElement);// html

console.dir(document.body); // body


document.body.style.height = 300 + 'px';
document.body.style.backgroundColor = 'red';

var blocks = document.getElementsByClassName('box');
var divs = document.getElementsByTagName('div')

console.log(blocks, 'blocks');

console.log(blocks[0], 'blocks');

var id = document.getElementById('foo');

console.dir(id, 'id');*/


/*var box = document.querySelectorAll('.box');

console.dir(box, 'box');


var form = document.querySelectorAll('.form');

console.dir(form, 'forms');
/*console.dir(form[0], 'forms');*/


/*function send(){

  var str = document.getElementsByTagName('input')[0].value,

  textarea = document.getElementsByTagName('textarea')[0],

  i=0;

  (function() { 

    if(i<str.length){

    textarea.value += str[i]
    i++

    setTimeout(arguments.callee, 200)

    console.log(textarea.value);

  }; }())

}*/


function send (){

  i=0;

  var strOne = document.getElementsByTagName('input')[0].value;

  var srtTwo = document.getElementById('two')

  textarea = document.getElementsByTagName('textarea')[0];

  textarea.value = strOne;

  console.log(str);

  console.log(textarea);

}
