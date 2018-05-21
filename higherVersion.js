/*
 two version strings composed of several non-negative decimal fields separated by periods ("."), both strings contain equal number of numeric fields. Return true if the first version is higher than the second version and false otherwise.

The syntax follows the regular semver ordering rules:

1.0.5 < 1.1.0 < 1.1.5 < 1.1.10 < 1.2.0 < 1.2.2
< 1.2.10 < 1.10.2 < 2.0.0 < 10.0.0
There are no leading zeros in any of the numeric fields, i.e. you do not have to handle inputs like 100.020.003 (it would instead be given as 100.20.3).

Example

For ver1 = "1.2.2" and ver2 = "1.2.0", the output should be
higherVersion(ver1, ver2) = true;
For ver1 = "1.0.5" and ver2 = "1.1.0", the output should be
higherVersion(ver1, ver2) = false.
Input/Output
*/
function higherVersion(ver1, ver2) {
  let compare1 = '';
  let compare2 = '';
  let count = 0;
    for(let i=0; i<ver1.length; i++){
      for(let j=0; j<ver2.length; j++){
        if(ver1[i]== '.'){
          compare1 += ver1[i+1]
        }
        if(ver2[j]== '.'){
          compare2 += ver2[j+1]
        }
        if(compare1 >= compare2) count++;
       
      }
    }
    console.log(count)
    return count == 2
}


let ver1 = "1.10.2";
let ver2 = "1.2.10";

higherVersion(ver1,ver2)

// working version:

function higherVersion(ver1, ver2) {
    ver1 = ver1.split`.`
    ver2 = ver2.split`.`
    res = 0;
    ver1.some((c,i) => res = c - ver2[i])
    return res > 0;
}

// other method

function higherVersion(ver1, ver2) {
    var v1 = ver1.split('.').map(Number),
        v2 = ver2.split('.').map(Number);
    
    while( v1.length < 14 ) { v1.push( 0 ); }
    while( v2.length < 14 ) { v2.push( 0 ); }
    
    function compare( a, b ) {
        for( var i=0; i<14; i++ ) {
            if( a[i] < b[i] ) {
                return -1;
            }
            else if( a[i] > b[i] ) {
                return 1;
            }
        }
        return 0;
    }
    
    return compare( v1, v2 ) === 1;
}


