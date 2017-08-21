var orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
]

var totalAmount = orders.reduce(function(sum, order){
    console.log("hello", sum, order)
    return sum + order.amount
    
}, 0)


var totalAmount = 0
for (var i = 0; i < orders.length; i++){
    totalAmount += orders[i].amount
}


// let sorted = totalAmount.sort
// console.log(sorted)

console.log(totalAmount)

// Testing below: vs TS

// var Greeter = (function () {
//     function Greeter(message) {
//         this.greeting = message;
//     }
//     Greeter.prototype.greet = function () {
//         return "Hello, " + this.greeting;
//     };
//     return Greeter;
// }());
// var greeter = new Greeter('world');
// var button = document.createElement('button');
// button.textContent = "Say Hello";
// button.onclick = function () {
//     alert(greeter.greet());
// };
// document.body.appendChild(button);
