i = 1;

document.write('Перебір чисел 1 - 150' );
document.write('<br />');

do {
    document.write('<div>' + i + '</div>' );
    document.write('<br />');
    i++;
} while(i <= 150);

sum = 0; 

	for (var i = 0; i <= 150; i++)
	 {
		if (i % 2 == 0) sum +=i
	}

document.write(sum);