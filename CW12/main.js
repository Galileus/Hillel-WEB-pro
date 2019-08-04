obj = { X:12, Y:3, znak:'+'};
foo = { X:33, Y:12, znak:'*'};


function SuperMath (obj){

	this.check = function(obj){
		var act = confirm('Wanna make an action with' + ' <' + obj['znak'] + '> ' + '?');
		if(!act){
		alert('fuck!');
		return this.input();
		}else {
		alert('let`s do it!')
		return this.math(obj);
		}	
	}

	this.math = function(obj){
		if(obj['znak'] === '+'){
		return obj['X'] + obj['Y'];
		}else if (obj['znak'] === '-') {
		return obj['X'] - obj['Y'];
		}else if (obj['znak'] === '*') {
		return obj['X'] * obj['Y'];
		}else if (obj['znak'] === '/') {
		return obj['X'] / obj['Y'];
		}else if (obj['znak'] === '%') {
		return obj['X'] % obj['Y'];
		}else if (obj['znak'] === '^') {
		return obj['X'] ^ obj['Y'];
		}
	}

	this.input = function (){
		obj.X = +prompt('Enter number X');
		obj.Y = +prompt('Enter number Y');
		obj.znak = prompt('Enter one of the sumbols(+ - / * %)');
		return res.check(obj);	
	}
}


var res = new SuperMath (obj);
var foo2 = new SuperMath (foo);


console.log(res.check(obj));
console.log(foo2.check(foo));
