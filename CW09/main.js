function makeUp(size) {
  var currentCount = 0;

  return function () {
   currentCount++;
   return currentCount;
  };

  return function () {
   currentCount--;
   return currentCount;
  };  

function isFinish() {
    return count == size;
}

function reset() {}

    


}

var Up = makeUp(10);


Up();
Up();



console.log(Up());
