//--------------1--------------------

obj = { X:12, Y:3, znak:'+'};

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


