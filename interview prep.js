//1. Using a 'for' loop, iterate over an array of numbers in JavaScript, printing each to the console.

var nums = [1, 2, 3];
for (i = 0; i < nums.length; i++){
  console.log(nums[i]);
}

/************************************************/

//2. Differentiate between function declarations and expressions.

function matt(){
  //This is a declaration
}

var matt = function(){
  //This is an expression
};

var matt = {
  firstName: "Matt",
  lastName: "Scilipoti",
  fullName: function(){
    return matt.firstName + " " + matt.lastName;
    //This is an expression. Declarations, ie. w/o the key "fullName:", cannot be nested inside a non-function block (an object).
  }
};

/************************************************/

//3. Explain the difference between referencing and invoking a function. Why would you do one over another?

  //index.html
  // <button id="save">Save</button>

  //script.js
  var buttonTag = $("#save");

  function save(){
    alert("saved!");
  }

  buttonTag.on("click", save()); //Invocation. Will call save function as soon as the JS loads.
  buttonTag.on("click", save); // Referencing. Loads the function, then "holds" it for later invocation.

/************************************************/

//4. Use the whiteboard to create a Javascript function that takes two arguments.

function add(a,b){
  return a + b;
}
//OR
var add = function(a,b){
  return a + b;
};

add(1,2);
//> 3
add(3,4);
//> 7

//Parameters are the variables in the function declaration. Arguments are the values passed in.

/************************************************/

//5. What's the difference between an explicit return, an implicit return, and a side effect?

var math = function(a, b){
  return a + b;
};
math(a,b);
//INPUT: 1, 2   OUTPUT: 3   SIDE EFFECT: n/a

var math = function(a, b){
  console.log(a + b);
};
math(a,b);
//INPUT: 1, 2   OUTPUT: undefined   SIDE EFFECT: console.log(3)

var savedValues = [];

function save(input){
  savedValues.push(input);
  alert("Saved!");
}
save("Hello");
//INPUT: "Hello"   OUTPUT: undefined   SIDE EFFECTS: savedValues.push("Hello") and alert("Saved!")

var savedValues = [];

function save(input){
  savedValues.push(input);
  alert("Saved!");
  return savedValues;
}
save("Hello!");
//INPUT: "Hello"   OUTPUT: savedValues   SIDE EFFECTS: savedValues.push("Hello") and alert("Saved!")

/************************************************/

//6. Explain the concept of a 'callback' function and how we can pass functions as arguments to other functions.

function add(a,b){
  return a + b;
}

function subtract(a,b){
  return a- b;
}

function math(a,b,callback){
  return callback(a,b);
}

//To add 3 plus 4
math(3,4,add);

//To subtract 7 minus 2
math(7,2,subtract);

/************************************************/

//7. Write a JavaScript Object literal with at least one property and one method (e.g. a person).

var person = {
  hair: "black",
  jump: function(){
    console.log("jump");
  }
};

/************************************************/

//8. Write a JavaScript constructor function with at least one property and one method (e.g. a person).

function Person(name) {
  this.name = name;
  this.speak = function(){
    console.log("Hi, my name is " + this.name);
  };
}

var andrew = new Person("Andrew");
andrew.speak();

//Add a method to a prototype

Person.prototype.hometown = "Chicago";
