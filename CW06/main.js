//--------------1--------------------

/*function randmass () {

n = Math.ceil(Math.random() * (200 - 0) + 0);

mass = new Array(n);

  for(i = 0; i < mass.length; i++){
    mass[i] = Math.ceil(Math.random() * (200 - 0) + 0);

  }
console.log(mass, 'mass'); 
}

randmass ();*/

//--------------2--------------------

/*n = Math.ceil(Math.random() * (200 - 0) + 0);

massa = new Array(n);
massb = new Array(n);

suma = 0; 
sumb = 0;

  for(i = 0; i < massa.length; i++){
    massa[i] = Math.ceil(Math.random() * (10 - 0) + 0);
    massb[i] = Math.ceil(Math.random() * (10 - 0) + 0);

    suma = suma + massa[i];
    sumb = sumb + massb[i];

  }

console.log(massa, 'array a');
console.log(massb, 'array b'); 

console.log(suma, 'sum array a elements'); 
console.log(sumb, 'sum array b elements'); 

//-------------------------------------

function compare (suma, sumb) {

  if(suma > sumb){
    return document.write('sum array A bigger'); 
  }else {
    return document.write('sum array B bigger' );
  }  
}


compare (suma, sumb);
*/



//--------------3--------------------
/*
act = prompt('enter action');

function sum (a, b) {

  if(act === '+'){
    return a + b;
  }else if (act === '-') {
    return a - b;
  }else if (act === '*') {
    return a * b;
  }else if (act === '/') {
    return a / b;
  }else if (act === '%') {
    return a % b;
  }else if (act === '^') {
    return a ^ b;
  }
}
sum (4,2);
console.log(sum(4,2));*/

//--------------4--------------------


/*function contain (str, elem) {

var mas = [];

str = arguments[0];
for (var i = 0; i < str.length; i++){

  if (elem.indexOf(str[i]) != -1){
    
  }else{
    mas.push(str[i]);
  }

}
var mas = mas.join('');
console.log(str);
console.log(mas);

}
contain ('hello world', ['l', 'd']);*/

//--------------5--------------------