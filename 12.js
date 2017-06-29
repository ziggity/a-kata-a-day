
Sheldon, Leonard, Penny, Rajesh and Howard are in the queue for a "Double Cola" drink vending machine; there are no other people in the queue. The first one in the queue (Sheldon) buys a can, drinks it and doubles! The resulting two Sheldons go to the end of the queue. Then the next in the queue (Leonard) buys a can, drinks it and gets to the end of the queue as two Leonards, and so on.

For example, Penny drinks the third can of cola and the queue will look like this:

Rajesh, Howard, Sheldon, Sheldon, Leonard, Leonard, Penny, Penny
Write a program that will return the name of a man who will drink the n-th cola.

Note that in the very beginning the queue looks like that:

Sheldon, Leonard, Penny, Rajesh, Howard
##Input

The input data consist of an array which contains five names, and single integer n.

(1 ≤ n ≤ 1000000000).
##Output / Examples Return the single line — the name of the person who drinks the n-th can of cola. The cans are numbered starting from 1. Please note that you should spell the names like this: "Sheldon", "Leonard", "Penny", "Rajesh", "Howard" (without the quotes). In that order precisely the friends are in the queue initially.

whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1)=="Sheldon"
whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52)=="Penny"
whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951)=="Leonard"
...............................................................................
Solution:

function whoIsNext(names, r){
  if(r == 1){
    return "Sheldon"
  }
  var base = names.length;
  
  function getIndex(n, i) {
    i = i || base;
    if (n < i) {
        return Math.floor(n * base / i);
    }
    return getIndex(n - i, 2 * i);
  }
  
  return names[getIndex(r-1)];
  
}

........................................................................................................

Thoughts:
1. Parameters names (array), and r is the nth' can of cola
2. watch out for edge case of 1, 1 will always be Sheldon
3. get the length of names, set it to var base. 
4. nested function getIndex (n,i), where i = i, or the base
if n<i return random # * n*index
