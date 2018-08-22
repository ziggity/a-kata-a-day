/*
You have been watching a video for some time. Knowing the total video duration find out what portion of the video you have already watched.

Example

For part = "02:20:00" and total = "07:00:00", the output should be
videoPart(part, total) = [1, 3].

You have watched 1 / 3 of the whole video.
*/
function videoPart(part, total) {
    let partTime = getSeconds(part);
    let totalTime = getSeconds(total);
    let divisor = gcd(partTime, totalTime);
    return [partTime/divisor, totalTime/divisor];
    
   
}


function getSeconds(time){
    let h = parseInt(time.substring(0,2)),
        m = parseInt(time.substring(3,5)),
        s = parseInt(time.substring(6,8));
        return h*60*60+m*60+s;
}
    
function gcd(a,b){
    while(a>0){
        let tmp = a;
        a=b%a;
        b=tmp;
    }
    return b;
}
