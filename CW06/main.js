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

/*x = +prompt('enter x');
act = +prompt('enter action');
y = +prompt('enter x');


a = x + y ;
b = x - y;
c = x * y;
d = x / y;
e = x % y;
f = x ^ y;

if (act === '+') {
  return '123'
  console.log(a, 'result');
}

/*console.log(a, 'result');*/



/*function doMath(x, act, y){


console.log(a, 'result')
}

doMath(1, 2);*/


function sum (a, b) {

  res = a + b;
  bes = a - b;
if(act === '+'){
  return res;
}else {
  return bes;
}

}


act = +prompt('enter action');


resSum = sum(1, 2);

console.log(resSum, 'resSum');