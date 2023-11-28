// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// Examples (input --> output):
// 255, 255, 255 --> "FFFFFF"
// 255, 255, 300 --> "FFFFFF"
// 0, 0, 0       --> "000000"
// 148, 0, 211   --> "9400D3"


// here is the solution to the problem : Basically in hex values always are two characters long FF for out of 256 range, and 00 for below (negative), so we check the range of the inputs, and then go from there. The tricky thing is when it's within bounds and its a low digit number, we need to add a 0 in front of it, like for 3 for example. 3.toSTring(16) returns 3. so we want 03 instead. This problem drove me mad. 

function rgb(r, g, b) {
    function decToHex(c){
      
      if(c >= 255) return "FF";
      else if (c < 0) return "00";
      else if(c.toString(16).toUpperCase().length <= 1)return 0 +c.toString(16).toUpperCase();
        return c.toString(16).toUpperCase();
      
    }
     return  decToHex(r) + decToHex(g) + decToHex(b);
     }
     
   
   
   
   

// function rgb(r, g, b) {

//     var hex = r.toString(16);
//     var hex1 = g.toString(16);
//     var hex2 = b.toString(16);
//     var sum = (hex.length + hex1.length + hex2.length );
    
//      if (sum == 0){
//             return 0 + hex + hex1 + hex2 
//      } else if (sum == 1){
//        function rgbRemix(r,g,b){
//     const R = r.toString(16);
//   const G = g.toString(16);
//   const B = b.toString(16);
//      return R + G + B
//      } 

//     }
// }








/////////////////////////////// Testing functions: rgb

describe("Tests", () => {

    const { strictEqual } = require('chai').assert;
  
    function doTest(r, g, b, expected) {
        const actual = rgb(r, g, b);
        const message = `for r = ${r} g = ${g} b = ${b}`;
        strictEqual(actual, expected, message);
    }
  
    it("Sample Tests", () => {
      doTest(  0,   0,   0, '000000');
      doTest(  0,   0, -20, '000000');
      doTest(300, 255, 255, 'FFFFFF');
      doTest(173, 255,  47, 'ADFF2F');
    });
  });
  

