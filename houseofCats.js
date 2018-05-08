/*
There are some people and cats in a house. You are given the number of legs they have all together. Your task is to return an array containing every possible number of people that could be in the house sorted in ascending order. It's guaranteed that each person has 2 legs and each cat has 4 legs.

Example

For legs = 6, the output should be
houseOfCats(legs) = [1, 3].

There could be either 1 cat and 1 person (4 + 2 = 6) or 3 people (2 * 3 = 6).

For legs = 2, the output should be
houseOfCats(legs) = [1].

There can be only 1 person.
*/

function houseOfCats(legs) {
    let result = [];
    let p = 0;
    let c = 0;
    while (legs >= 0) {
  if(legs % 4 == 2 || legs % 4 == 0){
    if(legs % 4 == 2 ?  c = 1: c= 0);
    result.push(p+c)
    p+=2
    legs -=4
      }
    }
 return result 
}
// other solution

const houseOfCats = legs => {
    const a = [];
    for (let i = legs/2 & 1; i <= legs/2; i += 2) {
        a.push(i);
    }
    return a;
};
