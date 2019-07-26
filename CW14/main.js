//--------------1--------------------

function SuperArray (){

}

SuperArray.prototype.randmass = function (n, m, opt) {
	
	var mass = new Array(n);
	this.mass = mass

	for(var i = 0; i < n; i++){
		mass[i] = new Array (m);

		for(var j = 0; j < mass[i].length; j++){
			mass[i][j] = Math.round(Math.random() * (opt.max - opt.min) + opt.min );
		}
	}
};

SuperArray.prototype.rander = function (separator) {
  var mass = this.mass;

  document.write('<br>')

  for (var i = 0; i < mass.length; i++) {
    for (var j = 0; j < mass[i].length; j++) {
      document.write(mass[i][j] + ' ')
    }
    document.write('<br>')
  }

  for(var i = 0; i < mass.length; i++) {
    document.write(separator + "" + separator)
  }

};



var foo = new SuperArray ();

foo.randmass(5, 5, { min: 10, max: 55 });

console.log(foo, 'foo');

foo.rander("!");


var game = new SuperArray();

game.randmass(10, 10, { min: 1, max: 100 });

console.log(game, 'game');

foo.rander('');









