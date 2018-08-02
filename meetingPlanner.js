/*
Time Planner
Implement a function meetingPlanner that given the availability, slotsA and slotsB, of two people and a meeting duration dur, returns the earliest time slot that works for both of them and is of duration dur. If there is no common time slot that satisfies the duration requirement, return null.

Time is given in a Unix format called Epoch, which is a nonnegative integer holding the number of seconds that have elapsed since 00:00:00 UTC, Thursday, 1 January 1970.

Each person’s availability is represented by an array of pairs. Each pair is an epoch array of size two. The first epoch in a pair represents the start time of a slot. The second epoch is the end time of that slot. The input variable dur is a positive integer that represents the duration of a meeting in seconds. The output is also a pair represented by an epoch array of size two.

In your implementation assume that the time slots in a person’s availability are disjointed, i.e, time slots in a person’s availability don’t overlap. Further assume that the slots are sorted by slots’ start time.

Implement an efficient solution and analyze its time and space complexities.

Examples:

input:  slotsA = [[10, 50], [60, 120], [140, 210]]
        slotsB = [[0, 15], [60, 70]]
        dur = 8
output: [60, 68]

input:  slotsA = [[10, 50], [60, 120], [140, 210]]
        slotsB = [[0, 15], [60, 70]]
        dur = 12
output: null 
*/
function meetingPlanner(slotsA, slotsB, dur) {
  let slotA = 0;
  let slotB = 0;
 
   
  while (slotA<slotsA.length && slotB<slotsB.length){
     let start, end;
    start = Math.max(slotsA[slotA][0], slotsB[slotB][0])
    end = Math.min(slotsA[slotA][1], slotsB[slotB][1])
   // console.log(Math.min(slotsA[slotA][1], slotsB[slotB][1]))
    if(start + dur <= end){
      return [start, start+dur];
    }
    console.log('consolelogs',slotsA, slotsB, slotA, slotB)
    if(slotsA[slotA][1] < slotsB[slotB][1]){
      slotA++;
    } else{
      slotB++
    }
  }
  
  return [];
}

let slotsA2 = [[1,10],[11,12]];
let slotsB2 = [[2,3], [4,5],[6,7],[7,9]];
let dur = 2;

 
// store time availabilty in two vars = A 40min, B 5min, dur 8min
// compared slotsA[0][0] - slotsA[0][1] Math.abs
//let slotsA = [[10, 50], [60, 120], [140, 210]];
//let slotsB = [[0, 15], [60, 70]];
console.log(meetingPlanner(slotsA2, slotsB2, dur))
