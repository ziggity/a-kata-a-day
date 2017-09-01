For a given chemical formula represented by a string, count the number of atoms of each element contained in the molecule and return an object (associative array in PHP, Dictionary<string, int> in C#).

For example:

var water = 'H2O';
parseMolecule(water); // return {H: 2, O: 1}

var magnesiumHydroxide = 'Mg(OH)2';
parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}

var fremySalt = 'K4[ON(SO3)2]2';
parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}
As you can see, some formulas have brackets in them. The index outside the brackets tells you that you have to multiply count of each atom inside the bracket on this index. For example, in Fe(NO3)2 you have one iron atom, two nitrogen atoms and six oxygen atoms.

Note that brackets may be round, square or curly and can also be nested. Index after the braces is optional.



Thoughts: Tricky question indeed. Requires some regex, search out a # and do something else, as that's our indicator of the next molecule. H2O, although edge case is H2O(No)2 the ()!

1. Pass in the formula into the function ('H2O')
2. Use a stack 
3. use regex to match unicode characters.
4. Push it up into the output, call output, voila

Solution:

function parseMolecule(formula) { // Pass in "H2O" as formula for this instance
  var stack = [];
  var multiplier = 1;
  var output = {};
  var elementMultiplier = false;

  formula = formula.match(/([A-Z][a-z]?)|(\d+)|([\[\]\(\)\{\}])/g); // formula = ['H', '2', 'O'] (The match() method retrieves the matches when matching a string against a regular expression. Regex is searching for alphabet a-z upper or lower case, ? matches and  | \d+ checks for digit, and | \ checks for parenthesis, global tag, and returns ['H', '2', 'O']. | Acts like a boolean OR. Matches the expression before or after the |. The | is needed because we might have a digit or another char. 
It can operate within a group, or on a whole expression. The patterns will be tested in order.

  formula.reverse().forEach(function (element) { // Pass in ['H', '2', 'O'] as formula - reverse it, Iterate through it passing element into annonymous function. 
    if(/\d+/.test(element)) { // element is 2 since it is the only digit
      multiplier *= parseInt(element); // 1 * int of element (say 2 in H20)
      stack.push(parseInt(element)); // stack = [2]
      elementMultiplier = true; // sets the var elementMultiplier = true, comes into play down the line
    } else if (/[\]\)\}]/.test(element)) { 
      elementMultiplier = false;
    } else if (/[\[\(\{}]/.test(element)) { // doesn't hit these else ifs
      var remove = stack.pop();
      multiplier /= remove; 
    } else if (/[A-Z][a-z]?/.test(element)) { // element = O H 
      if(!output[element]) { output[element] = 0; } //element =  O H H 
      output[element] += multiplier; // console.log(output[element]) = 1 2 H
      if(elementMultiplier) { // element = H H 
        var remove = stack.pop(); // remove = 2
        multiplier /= remove; // 
        elementMultiplier = false;
      }
    }
  });

  return output; // => { O: 1, H: 2 }
}

Clever solution:

function parseMolecule(formula) {
  var group, tokens, tokenExp = /([{(\[]|[})\]]|[A-Z][a-z]?)(\d*)/g, stack = [[]];
  while (tokens = tokenExp.exec(formula)) {
    tokens[2] = tokens[2] || 1;
    if (/^[A-Z]/.test(tokens[1])) {
      while (tokens[2]--) stack.push(stack.pop().concat([tokens[1]]));
    } else if (/[{\(\[]/.test(tokens[1])) {
      stack.push([]);
    } else {
      group = stack.pop();
      while (tokens[2]--) stack.push(stack.pop().concat(group))
    }
  }
  return stack[0].reduce(function (count, x) {
    count[x] = (count[x] || 0) + 1;
    return count;
  }, {});
}

Another solution:

/*******************************************************************************
 * Helper object to count keys.
 ******************************************************************************/
var KeyCount = function() {
  this.keys = {};
};

/*******************************************************************************
 * Add a number of keys to this collection. Adds one key if n is omitted
 ******************************************************************************/
KeyCount.prototype.addKey = function(key, n) {
  n = n === undefined ? 1 : n;
  var count = this.keys[key] || 0;
  this.keys[key] = count + n;
};

/*******************************************************************************
 * Multiply the count for each key in the collection with the specified factor
 ******************************************************************************/
KeyCount.prototype.multiply = function(factor) {
  for ( var key in this.keys) {
    if (this.keys.hasOwnProperty(key))
      this.keys[key] *= factor;
  }
};

/*******************************************************************************
 * Merge all the keys from another KeyCount into this.
 ******************************************************************************/
KeyCount.prototype.merge = function(other) {
  for ( var key in other.keys) {
    if (other.keys.hasOwnProperty(key)) {
      this.addKey(key, other.keys[key]);
    }
  }
};

function parseMolecule(m) {
  var tokens = m.match(/([A-Z][a-z]?\d*|[\[\(\]\){}]\d*)/g);
  var stack = [ new KeyCount() ];
  while (tokens.length > 0) {
    var token = tokens.shift();
    
    var atomCount = token.match(/[A-Z][a-z]?|[\[\(\]\){}]|\d+/g);
    var atom = atomCount[0];
    var count = atomCount.length > 1 ? parseInt(atomCount[1]) : 1;
    
    if (atom === '(' || atom === '[' || atom === '{') {
      stack.unshift(new KeyCount());
    } else if (atom === ')' || atom === ']' || atom === '}') {
      var current = stack.shift();
      current.multiply(count);
      stack[0].merge(current);
    } else {
      stack[0].addKey(atom, count);
    }
  }
  return stack[0].keys;
}

parseMolecule('K4[ON(SO3)2]2')
