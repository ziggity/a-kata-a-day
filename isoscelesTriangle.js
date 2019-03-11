function isoscelesTriangle(sides) {
let sorted = sides.sort()
let max = Math.max(...sorted);
let min = Math.min(...sorted);
let countMax =0;
let countMin =0;
let allsame =0;
    for(let i=0; i<sorted.length; i++){
        if(sorted[i] == max) countMax++
    }
    for(let i=0; i<sorted.length; i++){
        if(sorted[i] == min) countMin++
    }
    for(let i=0; i<sorted.length; i++){
        if(sorted[i+1] == sorted[i]) allsame++
    }
    if(allsame >= 2) return true
    if( countMax > countMin || countMin > countMax) return true
    
    return false
}


// Proper way to do it:don't use sort

