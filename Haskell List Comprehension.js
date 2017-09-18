This is the second part. You should do the previous part first.

Haskell List Comprehension can generate lists by applying filters and transformations.

In this kata we are going to do the same in JavaScript.

To do this, copy the solution you gave in the previous kata and modify it so that the options object can accept two parameters more:

filters[]: Array of functions. Each function receives an integer and returns a boolean. Only values that pass the filter, belong to the list.
transform(value): Is a function that takes a value and returns it muted.
For example:

//Filter
function isPrime(num) {
  var result = true;
  if (num !== 2) {
    if (num % 2 === 0) {
      result = false;
    } else {
      for (var x=3; result && x<=Math.sqrt(num); x+=2) {
        if (num % x === 0) {
          result = false;
        }
      }
    }
  }  
  return result;
}

//Transform
function arrayWrapper(num) {
  return [num];
}

ArrayComprehension({
  generator: "1..50",
  filters: [isPrime],
  transform: arrayWrapper
}); // returns [[1], [2], [3], [5], [7], [11], [13], [17], [19], [23], [29], [31], [37], [41], [43], [47]]

Solution: 


function ArrayComprehension(options) {
  options = options || {}
  const generator = 
    typeof options.generator === 'string' &&
    options.generator.trim()
    
  if (!generator) { return [] }
  
  const range = generator.split('..')
  if (range.length > 2) { return [] }
  
  const hasRange = range.length === 2
  let ary = hasRange
    ? generateWithRange(range)
    : generateWithoutRange(generator)
  
  if (ary.length === 0) { return ary }
  
  return filterAndTransform(ary, options)
  
  // filterAndTransform :: array[Numbers] -> Object{transform:func, filters:array} -> array[Number]
  function filterAndTransform(ary, options) {
    const hasTransform = (typeof options.transform === 'function')
    const hasFilters = Array.isArray(options.filters)

    if (hasFilters) {
      ary = ary.filter( item => options.filters.every( f => f(item) ) )
    }

    if (hasTransform) {
      ary = ary.map(options.transform)
    }

    return ary
  }
  
  
  // generateWithoutRange :: String -> array[Numbers]
  function generateWithoutRange(generator) {
    return generator.split(',').map(x => parseInt(x))
  }
  
  // generateWithRange :: array[String, String] -> array[Numbers]
  function generateWithRange(range) {
    const end = parseInt(range[1])
    const left = range[0].split(',')
    const start = parseInt(left[0])
    const hasCustomStep = left.length === 2
    const step = hasCustomStep ? parseInt(left[1]) - start : 1
    if (step === 0) { return [] }
  
    const ary = []
    if (step > 0) { 
      for(let i = start; i <= end; i = i + step) { ary.push(i) } 
    }
    else { // (step < 0)
      for(let i = start; i >= end; i = i + step) { ary.push(i) } 
    }
    return ary
  }
  
}
