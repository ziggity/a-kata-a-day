/*
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc",
           "ded"]
the output should be

addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]
                      */
                      
function addBorder(picture) {
    let result = [];
    var len = picture[0].length
 picture.forEach(function(ele)  {
   result.push('*'+ele+'*')
 })
 
 var asterisk = Array.apply(null, Array(len+2)).map(valueOf,'*').join('').replace(',', '');
result.push(asterisk)
result.unshift(asterisk)
 return result
}

// other method

function addBorder(picture) {
    return [x='*'.repeat(picture[0].length+2)].concat(picture.map(d=>'*'+d+'*'),x)
}


