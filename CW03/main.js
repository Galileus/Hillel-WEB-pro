// 1.---ok------------------------------------

/*do {
 n = +prompt('enter a number');
 nan = !isNaN(n)
 console.log(nan);
}while (nan == false);
 document.write(n, ' is a number!!!');*/

// 2.---ok------------------------------------


/*a = +prompt('enter factorial')

for (res = 1, i = 1; i <= a; i++) {
 
 console.log(i,'i');
 res = res * i;
}
console.log(res,'result');*/

// 3.----ok--------------------------------

n = +prompt('enter a number')

b = +prompt('step')

for (res = 1, i = 1;  i <= b; i++){

 console.log(i,'i');	
 console.log(res,'res');

 res = res * n;
}

document.write(res, ':result');

// 4.------------------------------------

/*alert  ('count paired numbers:');

a = +prompt('enter number a')

b = +prompt('enter number b')

for (; a < b; a++){
 if (a % 2 == 0)
 console.log(a,'a'); 
}
*/

// 5.------------------------------------



/*outer: for (i = 1; i < 10; i++) {

  for (var j = 1; j < 3; j++) {

    input = prompt('Значение в координатах '+i+','+j, '');

    // если отмена ввода или пустая строка -
    // завершить оба цикла
    if (!input) break outer; // (*)

  }
}
alert('Готово!');*/


// 6.------------------------------------

/*******
*    *
*    *
*    *
*******/

// 7.------------------------------------

/*Реализовать скрипт который получает номер n,
 и возвращает число Фибоначчи по этому номеру*/

 // 8.------------------------------------

/*n = +prompt('enter number n')

 for (i = n ; i > 0; i-- ){
 	console.log(i,'i');
 	document.write('<div>' + i + '</div>' );
 }*/