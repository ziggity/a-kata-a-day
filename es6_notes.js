Let's review Const: 

const codes = [1,2,3,4];

function appendCodes (users) {
  users.forEach(function (user) {
  return codes.push(user.code);
  });
}

appendCodes([
code:10
}
]);

code = [1,2,3,4,10]
-  -- -- -- - ---- -- - - - - --- - - -- -- - - - -- -  ---  - - -- - -- -

When to use Let?

Use let when you need variable to be reasigned

-  -- -- -- - ---- -- - - - - --- - - -- -- - - - -- -  ---  - - -- - -- -
Arrow (fat arrow) =>

var obj = {

    value: 0,
    increment: function() {
        setTimeout(function () {
            this.value++;
            console.log(this.value);
        }, 1000);
    }
}

obj.increment();

var obj = {

    value: 0,
    increment: function() { // can't put fat arrow here, won't work. Only below. As fat arrow references no object above.
        setTimeout( () => {
            this.value++;
            console.log(this.value);
        }, 1000);
    }
}

obj.increment();

-  -- -- -- - ---- -- - - - - --- - - -- -- - - - -- -  ---  - - -- - -- -
string interopolation 

var age =10;
var name = 'bob';
var message = `my name is ${name}. my age is 10`

-  -- -- -- - ---- -- - - - - --- - - -- -- - - - -- -  ---  - - -- - -- -

var message = 'hi, my name is \n' + 
'bob, and my age is\n' +
'10'

same as this this way: 

var message = `hi my name is
bob, and my age is
10`

// need to unindent with template literals
-  -- -- -- - ---- -- - - - - --- - - -- -- - - - -- -  ---  - - -- - -- -


const activities = [
'run',
'jump',
'swim'
];
const message = 'my name is bob i enjoy ${activities.joinJ(', ')}'
  .map(function(activity){
  return `${activity}!`
  })
  .join(', ');
}`

-  -- -- -- - ---- -- - - - - --- - - -- -- - - - -- -  ---  - - -- - -- -
Tagged literal

function tag(strings, ...values) {
console.log(strings);
console.log(values);
}
const name = 'bob';
const age = 20;

tag`hello my name is ${name} my age is ${age}`

----  -  -- -- -- - ---- -- - - - - --- - - -- -- - - - -- -  ---  - - -- - -- -
Raw
function tag(strings, ...values){
  console.log(strings.raw[0])}
  }
  -  -- -- -- - ---- -- - - - - --- - - -- -- - - - -- -  ---  - - -- - -- -
  var person = {
    firstname
    lastname: 'harvey',
    age: 20
  }
  
