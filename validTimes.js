function validTime(time) {
let split = time.split('');
    if(split[0] + split[1] >= 24) return false
    if(split[3]+split[4] >= 60) return false;
    return true;
}

/*

given a time make sure it's valid, ie: 25:45 = false
or 24:00 = true

etc

*/
