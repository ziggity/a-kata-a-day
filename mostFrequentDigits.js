/*
A step(x) operation works like this: it changes a number x into x - s(x), where s(x) is the sum of x's digits. You like applying functions to numbers, so given the number n, you decide to build a decreasing sequence of numbers: n, step(n), step(step(n)), etc., with 0 as the last element.

Building a single sequence isn't enough for you, so you replace all elements of the sequence with the sums of their digits (s(x)). Now you're curious as to which number appears in the new sequence most often. If there are several answers, return the maximal one.

Example

For n = 88, the output should be
mostFrequentDigitSum(n) = 9.

Here is the first sequence you built: 88, 72, 63, 54, 45, 36, 27, 18, 9, 0;
And here is s(x) for each of its elements: 16, 9, 9, 9, 9, 9, 9, 9, 9, 0.
As you can see, the most frequent number in the second sequence is 9.

For n = 8, the output should be
mostFrequentDigitSum(n) = 8.

At first you built the following sequence: 8, 0
s(x) for each of its elements is: 8, 0
As you can see, the answer is 8 (it appears as often as 0, but is greater than it).
*/
function mostFrequentDigitSum(n) {
  let elements = []
  do {
    let s = sum(n)
    n -= s
    elements.push(s)
  } while (n > 0)
  let result = new Array(20)
  result.fill(0)
  for (i = 0; i < elements.length; i++) {
    result[elements[i]]++
  }
  var hValue = 0
  var hIndex = 0
  result.find((element, index) => {
    if (element >= hValue && index > hIndex) {
      // console.log('a', element, index)
      hValue = element
      hIndex = index
    }
  })
  return hIndex
}

function sum(n) {
  return factorBy(n, 10).reduce((sum, value) => sum + value, 0)
}

function factorBy(n, factor = 10) {
  let result = []
  do {
    a = n % factor;
    n = b = (n - a) / factor;
    result.push(a)
  } while (b > 0)
  console.log(result)
  return result
}
