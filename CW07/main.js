//--------------1--------------------

function row (n) {

for(i = 0; i < n; i++){
  if ( n === 1){
    console.log('1');
  }else {
    console.log(n + '' + row(n-1);
  }
    
  }
  
}

row (5);