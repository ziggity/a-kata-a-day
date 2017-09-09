The filter() method creates a new array with all elements that pass the test implemented by the provided function.

var people = [....];

For loop: 

adults = []
for (let i = 0; i < people.length; i++) {
  if (people[i] > 18)
  adults.push(people[i])
}

Or you can write a filter for it:

var adults = people.filter((person) => person.age >21 ); // filter the people array

--------------------------------------------------------------------------------------------------------------------

Array.map() -> create a new array from the results of performaing action o nevery element in the calling array. Transforming data. 

array.map(function(curentValue, index, array) 


var aged = [];

for (var i=0; i<people.length; i++) {
  var agedPerson = people[i];
  var newAge = agedPerson.age +1;
  aged.push(newAge);

}

var aged = people.map((person) => person.age +1);

----------------------------------------------------------------------------------------------------------------------------

The reduce() method applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.

var theSimpsons = [];
var (var i=0; i<people.length; i++) {
  if theSimpsons.push(people[i]>18)
}



-------------------------------------------------------------------------
Let's combine all of them:

let num = [1,2,3,4,5,6,7,8,9,10];

let tripleOdds = num;
  filter((n) => n%2 !==0)
  map((odd) => odd*3);
  
