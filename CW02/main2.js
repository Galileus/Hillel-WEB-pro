n = prompt ('останнє число ?');

document.write('Перебір чисел:' );
document.write('<br />');

i = 1;

do {
    document.write('<div>' + i + '</div>' );
    document.write('<br />');
    i++;
} while(i <= n);

// --------------------------------------------

 for (i = 1, sum = 0; i <= n; i++) {
 	if (i % 2 == 0)
    sum  = sum + i;
 }

 console.log(sum, 'sum');


 document.write(sum, ' :сума парних чисел');
 document.write('<br>');
