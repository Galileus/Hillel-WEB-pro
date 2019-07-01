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

n = +prompt('розмір масиву');

alert('рендомне заповнення масива від a ДО b');
a = +prompt('min number');
b = +prompt('max number');

mass = new Array(n);

for(i = 0 ; i < mass.length; i++){
	mass[i] = Math.ceil(Math.random() * (a - b) + b);
}
console.log(mass, 'mass');

min = mass[0];
max = mass[0];

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

massnew = mass.slice(1, mass.length -2);

console.log(massnew, 'massnew');

for(i = 0; i < mass.length; i++){
	if(mass[i] == max || mass[i] == min ){
		console.log(mass[i], 'nok');
	} else {
		console.log(mass[i], 'ok');
		massnew[massnew.length] = mass[i];
	}
}

console.log(massnew, 'massnew');

//--------------4-------------------

/*mass = new Array (1, 5, 6, 2, 4);

massnew = new Array();

temp = 0;

for(i=0,j = arr.length - 1; i < j; i++ , j--)
{
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}
console.log(arr, 'arr');