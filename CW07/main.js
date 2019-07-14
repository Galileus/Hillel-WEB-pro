//--------------1--------------------

/*function row (n) {

for(var i = 0; i < n; i++){
  
  if ( n == 1){
    return n;
  }else {
    return n + ' ' + row(n - 1); 
  }  
}

}

console.log(row(5));*/


//--------------2--------------------



/*function sumTo(n){
  for (var i = 0; i < n ; i++){
    if(n === 1){
      return n;
    } else {
      return n + sumTo(n-1);
    }
  }
}
  
console.log(sumTo(5));*/

//--------------3--------------------

function fuc (n){

  for (i = 0; i < n; i++){
    if (n === 1) {
      return n;
    } else {
      return n * fuc(n - 1);
    }
  }
}

console.log(fuc(5));