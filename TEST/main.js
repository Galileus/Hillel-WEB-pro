/*who = prompt('who r u?');

if(who == 'admin'){

	pass = prompt ('enter your pass')
	if (pass == 'Blackbird') {
	document.write('Hello, my Lord');	

	}else if (pass == null){
		alert ('access denied')

	}else {
		alert ('wrong pass')
	}

}else if (who == null){
	alert ('access denied')

}else {
	alert ('i dont know u')
}*/


//---------------------------------------

/*do {
	n = +prompt('enter a number');
	nan = !isNaN(n)
	console.log(nan);
}
while (nan == false);
	document.write(n, ' is a number!!!');*/

//---------------------------------------


n = +prompt('enter a number');

for (s = 0, i = 1; i <= n; i++) {
	console.log(i);
	if ( i % 2 == 0)
		s = s + i;	
}

console.log(s, 'sum');

//---------------------------------------