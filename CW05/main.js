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

// генерація двомірного масиву

for (i = 0; i < mass.length; i++){
   mass[i] = new Array(b);

   for (j = 0; j < mass[i].length; j++){
   mass[i][j] = Math.floor(Math.random() * 10 + 0 - 0);
   } 
}
console.log(mass, 'mass'); // двомірний масив

// вичислення суми чисел вторинних масивів

for (i = 0, sum = 0; i < mass.length; i++){
   for (j = 0; j < mass[i].length; j++){
   sum = sum + mass[i][j];  
   }

   /*console.log(sum,'sum');*/ // сума чисел в кожномук масиві
   summass[summass.length] = sum; // запис сум в новий масив
}
console.log(summass, 'summass'); // новий масив із сумами

// вичислення  мінімального та макс суми чисел вторинних масивів та індексів

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
console.log(summaxi, 'summax index');

// замінити рядок з summin  на summax 

temp = mass[summini];

mass[summini] = mass[summaxi];

mass[summaxi] = temp;

console.log(mass, 'mass'); // двомірний масив