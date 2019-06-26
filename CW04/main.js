//--------------1--------------------

n = +prompt('розмір масиву');

mass = new Array(n);

for(i = 0; i < mass.length; i++) {
 	 mass[i] = Math.ceil(Math.random() * (20 - 0) + 0);
}
 console.log(mass, 'mass');

for(i = 0; i < mass.length; i++) {
	if(mass[i] % 2 !== 0){
		mass[i] = 0;
	}
}
console.log(mass, 'mass');


//--------------2--------------------

/*n = +prompt('розмір масиву');

mass = new Array(n);

for (i = 0 ; i < mass.length; i++){
	mass[i] = +prompt('Введи число');
	if (!mass[i] || mass[i] < 0){
		mass[i] = +prompt('Введи число знов');
	}
	
}
console.log(mass, 'mass');*/


//--------------3--------------------

/*n = +prompt('розмір масиву');

alert('рендомне заповнення масива від a ДО b');
a = +prompt('min number');
b = +prompt('max number');

mass = new Array(n);

for(i = 0 ; i < mass.length; i++){
	mass[i] = Math.ceil(Math.random() * (a - b) + b);
}
console.log(mass, 'mass');

min = mass[0];
max = min;

for (i = 0; i < mass.length; i++){
	if(mass[i] > max ){
		max = mass[i];
	}

	if(mass[i] < min){
		min = mass[i]
	}
}
console.log(max, 'max');
console.log(min, 'min');

m = n-2;
massnew = new Array (m);

console.log(massnew, 'massnew');

for(i = 0; i < mass.length; i++){
	if(mass[i] === max || mass[i] === min ){
		console.log(mass[i], 'nok');
	} else {
		console.log(mass[i], 'ok');
		massnew[i] = mass[i];
	}
}

console.log(massnew, 'massnew');*/

//--------------4-------------------

/*mass = new Array (1, 5, 6, 2, 4);

massnew = new Array();

for (i = mass.length - 1; i >= 0; i-- ){
	console.log(mass[i], 'mass');
	massnew.push(mass[i]);
}

console.log(mass, 'mass');
console.log(massnew, 'massnew');*/