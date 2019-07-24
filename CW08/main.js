//--------------1--------------------
/*
function inArray (text, arr){
	for (i = 0; i < arr.length; i++){
		  if (arr[i].indexOf(text) != -1){

		  }  			
	}
	return true;
}
console.log(inArray('hello', ['svnj', 'hello', 'cvpoq']));*/

//--------------2--------------------

/*
function assignObjects(flag){
newobj = {};
for(i = 0; i < arguments.length; i++ ){
	for (key in arguments[i]){
		if( flag == true && key in newobj ){
			continue;
		}else{
			newobj[key] = arguments[i][key]
		}
	}

}
return newobj;

};

assignObjects({ x: 20, z: 30 },{ x: 23, p: 13 }, true);

console.log(assignObjects(true, { x: 20, z: 30 },{ x: 23, p: 13 }));*/


//--------------3--------------------


/*massname = ['George', 'Max', 'John', 'Jack', 'Craig'];

mass = [];

function getPerson(name,min, max){
obj = {};
obj.name = name;
obj.age = Math.ceil(Math.random() * (max - min)+ min);
return obj;
}

for (i = 0; i < 5; i ++){
	mass.push(getPerson(randname(massname), 17, 28))
}


function randname (arr){

return arr[Math.ceil(Math.random() * (arr.length - 1))];
}

randname(massname);

console.log(randname(massname));

console.log(mass, 'person list')*/


//--------------test--------------------

/*function rand (){
	var rend = Math.ceil(Math.random() * (10 - 0)+ 0);
	return rend;
}	

console.log(rand());

mass = new Array (new Array(new Array(12), new Array(5)), new Array(15), new Array(new Array(5), new Array(5)));


function isArray (mass){
	for (var i = 0; i < mass.length; i++){
		if(mass[i] && mass[i].pop){
			isArray(mass[i]);
		}else {
			mass[i] = rand();
		}
	}
}

isArray(mass);

console.log(mass, 'new mass');
*/

//--------------test2--------------------

function Human (name){

  this.speed = 0;
  this.name = name;

  this.run = function(speed) {
    this.speed += speed;
    alert( this.name + ' бежит, скорость ' + this.speed );
  };

  this.stop = function() {
    this.speed = 0;
    alert( this.name + ' стоит' );
  };

}

/*
// конструктор
function Animal(name) {
  this.name = name;
  this.speed = 0;
}

// методы в прототипе
Animal.prototype.run = function(speed) {
  this.speed += speed;
  alert( this.name + ' бежит, скорость ' + this.speed );
};

Animal.prototype.stop = function() {
  this.speed = 0;
  alert( this.name + ' стоит' );
};

var animal = new Animal('Зверь');

alert( animal.speed ); // 0, свойство взято из прототипа
animal.run(5); // Зверь бежит, скорость 5
animal.run(5); // Зверь бежит, скорость 10
animal.stop(); // Зверь стоит*/


//--------------test2--------------------





