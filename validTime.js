function validTime(time) {
  if(time[0] + time[1] >= 24){
    return false;
  }
  if(time[3] + time[4] >= 60){
    return false;
  }
  
 

return true;
}
validTime('13:58')

// Check if the given string is a correct time representation of the 24-hour clock.

// Example

// For time = "13:58", the output should be
// validTime(time) = true;
// For time = "25:51", the output should be
// validTime(time) = false;
// For time = "02:76", the output should be
// validTime(time) = false.
