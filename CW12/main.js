//--------------1--------------------

obj = { X:12, Y:3, znak: '+'}

function SuperMath (){

}

SuperMath.prototype.check = function (obj) {
	var act = confirm ('Wanna make an action with sumbol' + ' ' + obj['znak'] + ' ' +'?' );
	if(act == true && obj['znak'] == '+' ){
		alert('lets do it!')
		return obj.X + obj.Y
	}else {
		return res.input();		 
	}
};

SuperMath.prototype.input = function (X, Y, znak) {
	var X = prompt('enter a number');
	var Y = prompt('enter a number');
	var znak = prompt('enter Math sumbol (+ - / *)');	
};

var res = new SuperMath ();

res.check(obj);
