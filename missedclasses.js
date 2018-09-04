/*
Your Math teacher takes education very seriously, and hates it when a class is missed or canceled for any reason. He even made up the following rule: if a class is missed because of a holiday, the teacher will compensate for it with a makeup class after school.

You're given an array, daysOfTheWeek, with the weekdays on which your teacher's classes are scheduled, and holidays, representing the dates of the holidays throughout the academic year (from 1st of September in year to 31st of May in year + 1). How many times will you be forced to stay after school for a makeup class because of holiday conflicts in the current academic year?

For your convenience, here is the list of month lengths (from January to December, respectively):

Month lengths: 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31.
Please note that in leap years February has 29 days.

Example

For year = 2015, daysOfTheWeek = [2, 3], and
holidays = ["11-04", "02-22", "02-23", "03-07", "03-08", "05-09"],
the output should be
missedClasses(year, daysOfTheWeek, holidays) = 3.

November 4th of 2015 is a Wednesday, February 23th of 2016 and March 8th of 2016 are Tuesdays, and the other holidays fall on Mondays. Classes are scheduled on Wednesdays and Tuesdays, so there will be only 3 missed classes
*/
function missedClasses(year, daysOfTheWeek, holidays) {
    var a = new Date("09/01/"+year);
    var c = 0;
    if (daysOfTheWeek.length != 0) daysOfTheWeek = daysOfTheWeek.map(x=>x%7);
    for (let i = 0; i < 365; i++) {
        if (daysOfTheWeek.includes(a.getDay())) {
            var t = a.toISOString().slice(5).slice(0,5);
            if (holidays.includes(t)) c++;
        }
        a.setHours(a.getHours()+24) 
    }
    return c;
}
