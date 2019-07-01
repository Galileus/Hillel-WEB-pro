/*size = prompt('size');*/
mass = new Array(5);

for(i = 0; i < mass.length; i++) {
  mass[i] = new Array(5);

  for (j = 0; j < mass[i].length; j++) {
    mass[i][j] = Math.floor(Math.random() * 10 + 0 - 0);
  }

 }

 console.log(mass, 'mass');