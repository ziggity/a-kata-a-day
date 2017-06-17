Vasya the clerk at the movie theatre -

The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. A "Avengers" ticket costs 25 dollars.

Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.

Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?

Return YES, if Vasya can sell a ticket to each person and give the change. Otherwise return NO.

###Examples:

// === JavaScript ==

tickets([25, 25, 50]) // => YES 
tickets([25, 100])    
        // => NO. Vasya will not have enough money to give change to 100 dollars
        
        -----------------------------------------------------------------------
        
        
 Thoughts:
 1. We loop through the array and check each index in order, from left to right. 
 2. If the amount [i] is greater than 25, and he has no change in the bank, return false or 'NO'
 3. So for each index that made it through - we receive $25 in the bank, so we can multiply each index by 25, add 1 to the index so we don't get 0 first time
 4. Check if money in bank minus change required is greater than 0, and if it is, return 'Yes', other wise return 'No'
 5. Realized we need to optimize this code to account for bills, not just total money, since 25, 100,50 are all bills, can't break them up.
 ..........................................................................................................................
 Simple Solution which doesn't account for individual bills (25, 100, 50 etc): 
 
 function tickets(peopleInLine){
    for (let i = 0; i < peopleInLine.length; i++) {
        if (peopleInLine[i] > 25) {
            let changeRequired = peopleInLine[i] - 25
            let moneyInBack = (peopleInLine.indexOf(peopleInLine[i]) + 1) * 25
            return (moneyInBack - changeRequired > 0) ? 'YES' : 'NO'
        }
    }
    peopleInLine;
}

Correct solution:

function isEmpty(xs) { return xs.length === 0; }
function first(xs) { return xs[0]; }
function rest(xs) { return xs.slice(1); }

function tickets(xs) {
  function loop(a,b,c,xs) {
    // validate drawer, a=$25, b=$50, c=$100
    if (a < 0 || b < 0 || c < 0)
      return "NO";

    // if the drawer is valid and the line of people is empty...
    else if (isEmpty(xs))
      return "YES";

    // otherwise, process the next person in line
    else
      switch (first(xs)) {
        case 25:                                
          return loop(a+1, b,   c, rest(xs)); // give back $0
        case 50:
          return loop(a-1, b+1, c, rest(xs)); // give back $25
        case 100:
          return b > 0                          // if drawer has a $50..
            ? loop(a-1, b-1, c+1, rest(xs))     // give back $25 + $50 
            : loop(a-3, b,   c+1, rest(xs))     // give back 3 * $25
          ;
      }
  }
  // start the loop with 0 of each bill in the drawer
  return loop(0,0,0,xs);
}
.........................................................................................................
Most clever answer: very well done

function Clerk(name) {
  this.name = name;
  
  this.money = {
    25 : 0,
    50 : 0,
    100: 0 
  };
  
  this.sell = function(element, index, array) {
    this.money[element]++;

    switch (element) {
      case 25:
        return true;
      case 50:
        this.money[25]--;
        break;
      case 100:
        this.money[50] ? this.money[50]-- : this.money[25] -= 2;
        this.money[25]--;
        break;
    }
    return this.money[25] >= 0;
  };
}

function tickets(peopleInLine){
  var vasya = new Clerk("Vasya");
  return peopleInLine.every(vasya.sell.bind(vasya)) ? "YES" : "NO";
}
