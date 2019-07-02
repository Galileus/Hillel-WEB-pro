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

for (i = 0; i < mass.length; i++){
 mass[i] = new Array(b);

 for (j = 0; j < mass[i].length; j++){
  mass[i][j] = Math.floor(Math.random() * 10 + 0 - 0);

 }

}
console.log(mass, 'mass');



for (i = 0; i < mass.length; i++){
 for (j = 0, sum = 0; j < mass[i].length; j++){
  sum = sum + mass[i][j];


  

 }
 console.log(sum, 'sum');

/* maxsum = mass[i][0]
 minsum = mass[i][0]
console.log(maxsum, 'maxsum');
console.log(minsum, 'minsum');*/
 
}