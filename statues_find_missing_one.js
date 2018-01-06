/*
Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

Example

For statues = [6, 2, 3, 8], the output should be
makeArrayConsecutive2(statues) = 3.

Ratiorg needs statues of sizes 4, 5 and 7.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer statues

An array of distinct non-negative integers.

Guaranteed constraints:
1 ≤ statues.length ≤ 10,
0 ≤ statues[i] ≤ 20.

[output] integer

The minimal number of statues that need to be added to existing statues such that it contains every integer size from an interval [L, R] (for some L, R) and no other sizes.
*/

function makeArrayConsecutive2(statues) {
  let counter = 0;   
  let dictionary1 = {};
     for (i=0; i<statues.length; i++){
       var currentChar = statues[i];
      if(dictionary1[currentChar]){
       dictionary1[currentChar] ++;
      }else{
        dictionary1[currentChar] = currentChar;
      }
     }
     
     console.log(dictionary1)
  for(j=statues[0]; j <= statues[statues.length-1]; j++){
        
    if(dictionary1[j] === undefined){
      
      counter ++;
    }
    
  }
  return counter;
}

function numberMissing(array){
  let sArr = array.sort((a, b) => a-b),
      count = 0;
  for(let i = 0; i < sArr.length - 1; i++){
      let diff = sArr[i+1] - sArr[i] - 1
      if(diff > 0){
        count += diff
      }
  }
  console.log(sArr)
  
  return count
}

//makeArrayConsecutive2([2,3,4,5,6,10])
numberMissing([0,2,3,4,5,6,8,10])

