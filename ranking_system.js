/* Write a class called User that is used to calculate the amount that a user will progress through a ranking system similar to the one Codewars uses.

Business Rules:

A user starts at rank -8 and can progress all the way to 8.
There is no 0 (zero) rank. The next rank after -1 is 1.
Users will complete activities. These activities also have ranks.
Each time the user completes a ranked activity the users rank progress is updated based off of the activity's rank
The progress earned from the completed activity is relative to what the user's current rank is compared to the rank of the activity
A user's rank progress starts off at zero, each time the progress reaches 100 the user's rank is upgraded to the next level
Any remaining progress earned while in the previous rank will be applied towards the next rank's progress (we don't throw any progress away). The exception is if there is no other rank left to progress towards (Once you reach rank 8 there is no more progression).
A user cannot progress beyond rank 8.
The only acceptable range of rank values is -8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8. Any other value should raise an error.
The progress is scored like so:

Completing an activity that is ranked the same as that of the user's will be worth 3 points
Completing an activity that is ranked one ranking lower than the user's will be worth 1 point
Any activities completed that are ranking 2 levels or more lower than the user's ranking will be ignored
Completing an activity ranked higher than the current user's rank will accelerate the rank progression. The greater the difference between rankings the more the progression will be increased. The formula is 10 * d * d where d equals the difference in ranking between the activity and the user.
Logic Examples:

If a user ranked -8 completes an activity ranked -7 they will receive 10 progress
If a user ranked -8 completes an activity ranked -6 they will receive 40 progress
If a user ranked -8 completes an activity ranked -5 they will receive 90 progress
If a user ranked -8 completes an activity ranked -4 they will receive 160 progress, resulting in the user being upgraded to rank -7 and having earned 60 progress towards their next rank
If a user ranked -1 completes an activity ranked 1 they will receive 10 progress (remember, zero rank is ignored)
Code Usage Examples:

var user = new User()
user.rank // => -8
user.progress // => 0
user.incProgress(-7)
user.progress // => 10
user.incProgress(-5) // will add 90 progress
user.progress # => 0 // progress is now zero
user.rank # => -7 // rank was upgraded to -7
Note: Codewars no longer uses this algorithm for its own ranking system. It uses a pure Math based solution that gives consistent results no matter what order a set of ranked activities are completed at.

*/

Thoughts:
1. create a dictionary with the ranks -8 - 8 with no 0 rank
2.create the User class which functions for incProgress to add points to their score

Solution:

var ranks = [-8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8];

User = function() {
  this._progress = 0;
  
  this.incProgress = function(rank) {
    if (rank > 8) throw Error();
    if (rank == 0) throw Error();
    if (rank < -8) throw Error();
    if (rank > 0) rank--;
    var thisrank = this.rank;
    if (thisrank > 0) thisrank--;
    var cmp = rank - thisrank;
    if (cmp == 0) this._progress += 3;
    if (cmp == -1) this._progress += 1;
    if (cmp > 0) this._progress += 10 * cmp * cmp;
  }
  
  Object.defineProperty(this, "rank", { get: function () {
    return ranks[Math.min(15,Math.floor(this._progress/100))];
  }});
  
  Object.defineProperty(this, "progress", { get: function () {
    return Math.min(this._progress, 1500) % 100;
  }});
}

Let's dive deep into this with some console logs: 

function User(){
  this.rank = -8;
  this.progress = 0;
  this.ranking = {
    "-8": 0,
    "-7": 1,
    "-6": 2,
    "-5": 3,
    "-4": 4,
    "-3": 5,
    "-2": 6,
    "-1": 7,
     "1": 8,
     "2": 9,
     "3": 10,
     "4": 11,
     "5": 12,
     "6": 13,
     "7": 14,
     "8": 15
  };
};

User.prototype.addPoints = function(points){
  this.progress += points;
  var levels = Math.floor(this.progress / 100);
  console.log('newer cl', levels)  // 0
  if(levels > 0){
     console.log('first cl', levels)  // 1
    for(;levels > 0; levels--){
       console.log('2nd cl', levels)  // 1
      this.rank += this.rank == -1?2:1;
       console.log('third cl', this.rank)  // -7
    }
    this.progress = this.progress % 100;
     console.log('fourth cl', this.progress) // 10
  }
  if(this.rank == 8) this.progress = 0;
};

User.prototype.incProgress = function(rank){
  if(rank < -8 || rank === 0 || rank > 8) throw error;
   console.log('new cl', rank)  // -5
  var diff = this.ranking[rank] - this.ranking[this.rank];
 console.log('new1 cl', diff) // c1 2 c1 -7 c1 1 c1 -7
  if(diff === 0){
    this.addPoints(3);
  }else if(diff > 0){
    this.addPoints(10 * diff * diff);
  }else if(diff === -1){
    this.addPoints(1);
  }
}

var user = new User()
user.rank // => -8
console.log(user.rank) // start off at -8 as the demo said.
user.progress // => 0
console.log(user.progress) // 0 nothing progressed
user.incProgress(-7)
console.log(user.incProgress(-7)) // undefined
user.progress // => 10
console.log(user.progress) // 20
user.incProgress(-5) // will add 90 progress
console.log(user.incProgress(-5))
user.progress // progress is now zero
console.log(user.progress) // 50
user.rank  // rank was upgraded to -7
console.log(user.rank) // -7 


