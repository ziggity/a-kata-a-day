//Two solutions, one the naive way with 70 lines of code vs 20 lines. 

/*
Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

Example

For year = 1905, the output should be
centuryFromYear(year) = 20;
For year = 1700, the output should be
centuryFromYear(year) = 17.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer year

A positive integer, designating the year.

Guaranteed constraints:
1 ≤ year ≤ 2005.

[output] integer

The number of the century the year is in.

*/

// function centuryFromYear(year) {
//   let result;
// if (year <101){
//   return 1;
// }
// if (year <= 201){
//   return 2;
// }

// if (year <= 301 ){
//   return 3;
// }
// if (year <= 401 ){
//   return 4;
// }
// if (year <= 501 ){
//   return 5;
// }
// if (year <= 601 ){
//   return 6;
// }
// if (year <= 701 ){
//   return 7;
// }
// if (year <= 801 ){
//   return 8;
// }
// if (year <= 901 ){
//   return 9;
// }
// if (year <= 1001 ){
//   return 10;
// }
// if (year <= 1101 ){
//   return 11;
// }
// if (year <= 1201 ){
//   return 12;
// }
// if (year <=1301 ){
//   return 13;
// }
// if (year <= 1401 ){
//   return 14;
// }
// if (year <=1501 ){
//   return 15;
// }
// if (year <=1601 ){
//   return 16;
// }
// if (year <= 1701 ){
//   return 17;
// }
// if (year <= 1801 ){
//   return 18;
// }
// if (year <= 1901 ){
//   return 19;
// }
// if (year <= 2000 ){
//   return 20;
// }
// if (year <= 2005 ){
//   return 21;
// }

//     return result;
// }

// console.log(centuryFromYear(8))

function centuryFromYear(year) {
    var newYear = year.toString().length;
    var stYear
    if (newYear >= 4){
        stYear = year.toString().substring(0, 2);
        if (year % 100 !== 0){ 
        return (parseInt(stYear)+1);
        } else {
        return parseInt(stYear);  
        };
    } else if (newYear >= 3){
        stYear = year.toString().substring(0,1);
        if (year % 100 !== 0){ 
        return (parseInt(stYear)+1);
        } else {
        return parseInt(stYear);  
        };
    } else if (newYear < 3){
        return 1;
    };
};

console.log(centuryFromYear(4000))
