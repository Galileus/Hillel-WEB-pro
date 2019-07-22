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
