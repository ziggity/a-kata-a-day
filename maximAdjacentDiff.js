// find the max Absolute value of the difference between adjacents integers, i.e [1,4,1,1] answer is 3

function arrayMaximalAdjacentDifference(inputArray) {
  var counter = 0; 
  
  for(var i=0; i<inputArray.length; i++){
    let change = Math.abs(inputArray[i] - inputArray[i+1]);
    console.log(change)
    if(change > counter){
      counter = change;
      console.log(counter)
    }
    
  }
  
  return (counter);
}
