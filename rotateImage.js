/*

Note: Try to solve this task in-place (with O(1) additional memory), since this is what you'll be asked to do during an interview.

You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).

Example

For

a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]
the output should be

rotateImage(a) =
    [[7, 4, 1],
     [8, 5, 2],
     [9, 6, 3]]
*/

function rotateImage(a) {
let rotate = [];
    
    for(let i=0; i<a.length/2; i++){
      let offsetMin = i;
      let offsetMax = (a.length) -1 -i;
        for(let j=offsetMin; j<offsetMax; j++){
            let top = a[offsetMin][j];
            let left = a[offsetMax - j + offsetMin][offsetMin]
            let right = a[j][offsetMax];
            let bottom = a[offsetMax][offsetMax - j + offsetMin];
            a[offsetMin][j] = left
            a[j][offsetMax] = top
            a[offsetMax][offsetMax -j + offsetMin] = right
            a[offsetMax - j + offsetMin][offsetMin] = bottom
        }
    }
    return a; 
}
