given an hour and a minute return the angle the hands make


function clockAngle(hour, minutes){
  let minuteAngle = 360*(minutes/60);
  let hourAngle = (360*(hour/12)) + ((360/12)*(minutes/60));
  let total = `Minute angle: ${minuteAngle},  Hour angle: ${hourAngle}`;
  console.log('hour angle = ' + hourAngle);
  console.log('minute angle = ' + minuteAngle)
  return total;
}

clockAngle(12,00) 
// hour angle = 360
minute angle = 0
=> 'Minute angle: 0,  Hour angle: 360'

