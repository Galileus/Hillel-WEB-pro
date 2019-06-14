n = prompt ('Скільки чисел перебрати ?');

document.write('Перебір чисел:' );
document.write('<br />');

i = 1;

do {
    document.write('<div>' + i + '</div>' );
    document.write('<br />');
    i++;
} while(i <= n);

// --------------------------------------------

sum = 0;

 for (i = 1; i <= n; i++) {
 	if (i % 2 == 0)
    sum  = sum + i;
 }

 console.log(sum, 'sum');


 document.write(sum, ' :сума парних чисел');
 document.write('<br>');