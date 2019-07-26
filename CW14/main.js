//--------------1--------------------

/*obj = { X:12, Y:3, znak:'+'};

// constructor

function SuperMath (obj){

}

//Method in proto

SuperMath.prototype.check = function(obj){
	var act = confirm('Wanna make an action with' + ' <' + obj['znak'] + '> ' + '?');
	if(!act){
		alert('fuck!');
		return res.input();
	}else {
		alert('let`s do it!')
		return res.math(obj);
	}
};

//MethodS in proto

SuperMath.prototype.input = function(){
	obj.X = +prompt('Enter number X');
	obj.Y = +prompt('Enter number Y');
	obj.znak = prompt('Enter one of the sumbols(+ - / * %)');
	console.log(obj);
	return res.check(obj);
};

SuperMath.prototype.math = function(obj){
  if(obj['znak'] === '+'){
    return obj['X'] + obj['Y'];
  }else if (obj['znak'] === '-') {
    return obj['X'] - obj['Y'];
  }else if (obj['znak'] === '*') {
    return obj['X'] * obj['Y'];
  }else if (obj['znak'] === '/') {
    return obj['X'] / obj['Y'];
  }else if (obj['znak'] === '%') {
    return obj['X'] % obj['Y'];;
  }else if (obj['znak'] === '^') {
    return obj['X'] ^ obj['Y'];
  }
};


var res = new SuperMath (obj);

console.log(res.check(obj));
*/


/*function Human(name, age) {

this.name = name;
this.age = age;
this.speed

this.run = function(speed){
	alert(this.name + 'is running' + 'speed' + speed)
};

};

var personOne = new Human ('Valera', 25);
console.log(personOne);
personOne.run(5);
*/



function SuperArray (n, m, obj) {
	this.mass = new Array(n);

	this.randmass = function(){
		for (i = 0; i < n; i++) {
	   		this.mass[i] = new Array(m);

		   for (j = 0; j < this.mass[i].length; j++) {
		   		this.mass[i][j] = Math.floor(Math.random() * (obj.max + obj.min) - obj.min);
		   }

	};

	this.render = function(){
		for (var i = 0 ; i < n; i++){
			var item = this.mass[i];
			for(var j = 0; j < item.length; j++){
				var foo = item[j]
				document.write(foo);
			}document.write(<br>);
			
		}
	
	}

};

}

var foo = new SuperArray (5, 5, {min: 10, max: 55});

console.log(foo.randmass());

console.log(foo);


foo.render();