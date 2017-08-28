https://www.sitepoint.com/recursion-functional-javascript/

while loop: pseudo code

def look_for_key(mainbox):
  pile = main_box.make_a_pile()
  while pile is not empty:
  box = pile.grab()
  for item in box:
  if item.isabox():
  pile.append(item):
  elif item.isakey():
  print "found key"
  
  recursive:
  
  def lookforkey(box):
    for item in box:
      if item.isabox():
        lookforkey(item):
          elif item.isakey():
            print "found key"
           
recursion is used to make code look cleaner. beware of infinite loops!
            
var factorial = function(number) {
  if (number <= 0) { // terminal case
    return 1;
  } else { // block to execute
    return (number * factorial(number - 1));
  }
};
console.log(factorial(6));
// 720      
         
