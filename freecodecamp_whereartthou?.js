
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
  var src = Object.keys(source); 
  
  return collection.filter(function (obj){ //  filter through array using filter method
    for (var i = 0; i<src.length; i++) { // itterate over each item in the object
      if(!obj.hasOwnProperty(src[i]) || obj[src[i]] !== source[src[i]]){ // check if obj in collection does not contain the key and property value doesnt match value in source
        return false; // return false if it's correct
      }
    }
   return true;
  });
}
  
  // Only change code above this line

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
