/*
John Doe likes holidays very much, and he was very happy to hear that his country's government decided to introduce yet another one. He heard that the new holiday will be celebrated each year on the xth week of month, on weekDay.

Your task is to return the day of month on which the holiday will be celebrated in the year yearNumber.

For your convenience, here are the lists of months names and lengths and the list of days of the week names.

Months: "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December".
Months lengths: 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31.
Days of the week: "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday".
Please, note that in leap years February has 29 days.

Example

For x = 3, weekDay = "Wednesday", month = "November", and yearNumber = 2016, the output should be
holiday(x, weekDay, month, yearNumber) = 16.

The new holiday will be celebrated every November on the 3rd Wednesday of the month. In 2016 the 3rd Wednesday falls on the 16th of November.

For x = 5, weekDay = "Thursday", month = "November", and yearNumber = 2016, the output should be
holiday(x, weekDay, month, yearNumber) = -1.

There are only 4 Thursdays in November 2016.
*/

function holiday(x, weekDay, month, yearNumber) {
  var weekD = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  var idxDay = weekD.indexOf(weekDay);
  var idxMonth = months.indexOf(month)
  var startDate = new Date(yearNumber, idxMonth, 1);
  var count = 0;
  if (startDate.getDay() == idxDay && x == 1){
    return 1
  }else if (startDate.getDay() == idxDay){
    count++;
  }
  for (var i = 0; i < 31; i++){
  startDate.setDate(startDate.getDate()+1)
    if (startDate.getDay() == idxDay && startDate.getMonth() == idxMonth){
      count++;
      if (count == x){
        return startDate.getDate(); 
      }
    }
  }
  return -1;
}
