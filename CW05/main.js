//--------------1--------------------

/*mass = [1, 2, 3, 4, 5, 6];
console.log(mass, 'mass');

for(i = 0, temp = 0; i < mass.length; i++){
   
 if (i % 2 == 0){
  temp = mass[i]  
  mass[i] = mass[i+1]
  mass[i+1] = temp  
  
 }
}
console.log(mass, 'mass');

*/


//--------------2--------------------

a = 5; 
b = 5; 

mass = new Array (a);
summass = new Array ();
temp = new Array ();

for (i = 0; i < mass.length; i++){
 mass[i] = new Array(b);

 for (j = 0; j < mass[i].length; j++){
  mass[i][j] = Math.floor(Math.random() * 10 + 0 - 0);

 }

}
console.log(mass, 'mass');

for (i = 0, sum = 0; i < mass.length; i++){
 


  for (j = 0; j < mass[i].length; j++){
  sum = sum + mass[i][j];  
 }
 
 console.log(sum, 'sum');

summass[summass.length] = sum;
}

console.log(summass, 'summass');

summax = summass[0];
summin = summass[0];

summaxi = 0
summini = 0

for (k = 1; k < summass.length; k++){
  if (summass[k] > summax ){
    summax = summass[k];
    summaxi = k;
  }

  if (summass[k] < summin ){
    summin = summass[k];
    summini = k;
  }
}
console.log(summin, 'summin');
console.log(summini, 'summin index');


console.log(summax, 'summax');
console.log(summaxi, 'summin index');

/*console.log(mass[summini], 'mass summini');*/

temp = mass[summini];

mass[summaxi] = temp;

console.log(temp, 'temp');
console.log(mass, 'mass');


