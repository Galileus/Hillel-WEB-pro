// 1.---ok------------------------------------

do {
 n = +prompt('enter a number');
 nan = !isNaN(n)
 console.log(nan);
}while (nan == false);
 document.write(n, ' is a number!!!');

// 2.---ok------------------------------------


/*a = +prompt('enter factorial')

for (res = 1, i = 1; i <= a; i++) {
 
 console.log(i,'i');
 res = res * i;

}
console.log(res,'result');
*/
// 3.----ok--------------------------------

/*n = +prompt('enter a number')

b = +prompt('step')

for (res = 1, i = 1;  i <= b; i++){

 console.log(i,'i');	
 console.log(res,'res');

 res = res * n;
}

document.write(res, ':result');*/

// 4.------------------------------------

/*alert  ('count paired numbers:');

a = +prompt('count from')

b = +prompt('count to')

for (; a < b; a++){
 if (a % 2 == 0)
 console.log(a,'a'); 
}
*/

// 5.------------------------------------

/* a = 0;
 b = 300;
 for (i = a; i <= b; i++) {
     for (j = 2; j < i; j++) {
         if (i % j === 0) {
             break;
         } else if (i === j + 1) {
             console.log(i);
         }
     }
 }
*/

// 6.------------------------------------

/*for (i = 0; i < 5; i++){
	document.write('<br>');

	if(i == 0 || i == 4){
		for (k = 0; k < 6; k++){	
			document.write('*');
		}		

	} else {
		for (j = 0; j < 6; j++) {
			if(j == 0 || j == 5){
				document.write('*');
			} else {
				document.write('&nbsp&nbsp');
			}
		}		
	}
}*/

// 7.------------------------------------

/*fib = +prompt('enter a number:');
a = 1;
b = 1;

for(i = 3; i <= fib; i++) {
 c = a + b;
 a = b;
 b = c;
}
document.write('Число Фібоначчі: ', b);*/



// =---------extra home work

 // 8.------------------------------------

/*n = +prompt('enter number n')

 for (i = n ; i > 0; i-- ){
 	console.log(i,'i');
 	document.write('<div>' + i + '</div>' );
 }*/

 // 9.------------------------------------


/*n = +prompt('Enter number');
 if (n >= 1 && n <= 10) {
  for (i = 1; i <= 10; i++) {
    document.write(n + ' * ' + i + ' = ' + n * i + '<br>');
}
 } else {
  alert('smth went wrong!!!')
 }
*/