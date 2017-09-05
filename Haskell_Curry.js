
Caveat

Currying is not exactly what is described below. Stretch your mind!

Task

Create a function which accepts a single argument of another function and returns a "curried" version of that function.

Currying is a technique named (as is the language Haskell) after the mathematician Haskell Curry which allows a function's arguments to be fed to it through separate instances of running that function. For example, take the following function:

function adder(arg1, arg2) {
  return arg1 + arg2;
}
This function would normally be invoked like so:

var example = adder(1,3); // 4
A "curried" version of this function could be executed in either of the following ways

var example = adder(1)(4); // 5
Or:

adder(5)
var example2 = adder(6); // 11
Your goal in this Kata is to produce a higher-order function that accepts another function as an argument and returns a "curried" version of that function.

function adder () {
  return [].slice.call(arguments).reduce(function(a,b){
    return a + b
  },0);
}

var curryAdder = CurryIt(adder);
This "curried" version of the original function should expand its arguments when invoked with arguments. It should allow multiple arguments to be passed into each invocation.

It should execute the original function and then restore that function's original argument-less state when invoked without arguments.

See example here, assuming curryAdder from above has been created already:

curryAdder(1);
curryAdder(1,2,3);
curryAdder(2)(2,5);
var example = curryAdder(); // 16
curryAdder(1)(2);
var example2 = curryAdder(); // 3
For fun, let's make sure this works with native global functions and methods too! (will involve some context)

var curryEval = CurryIt(eval);
curryEval("var y = function(){return true}");
curryEval();
y(); // => true
Context is to be fixed the first time the "curried" function is called after creation.



Clever solution: function CurryIt(func) {
  let fn = func;
  let that;
  
  return function(...args) {
    if (!that) that = this;
    
    if (args.length === 0) {
      const result = fn()
      fn = func
      return result
    }
    
    fn = fn.bind(that, ...args)
  }
}

Another method to solve it:

function CurryIt(func) {
  let localArgs = [];
  let context = null
  return function curry(...a) {
    if (this != ((function () {return this;}).call(null))) context = this
    if (!a.length) {
      let retVal = func.call(context,...localArgs);
      localArgs = [];
      return retVal
    }
    localArgs = localArgs.concat(a)
    return curry
  }
}
