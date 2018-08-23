/*
You're a pretty busy billionaire, and you often fly your personal Private Jet to remote places. Usually travel doesn't bother you, but this time you are unlucky: it's New Year's Eve, and since you have to fly halfway around the world, you'll probably have to celebrate New Year's Day in mid-air!

Your course lies west of your current location and crosses several time zones. The pilot told you the exact schedule: it is known that you will take off at takeOffTime, and in minutes[i] after takeoff you will cross the ith border between time zones. After crossing each border you will have to set your wrist watch one hour earlier (every second matters to you, so you can't let your watch show incorrect time). It is guaranteed that you won't cross the IDL (i.e. after crossing each time zone border your current time will be set one hour back).

You've been thinking about this situation and realized that it might be a good opportunity to celebrate New Year's Day more than once, i.e. each time your wrist watch shows 00:00. Assuming that you set your watch immediately after the border is crossed, how many times will you be able to celebrate this New Year's Day with a nice bottle of champagne? Note that the answer should include celebrations both in mid-air and on the ground (it doesn't matter if the plane landed in the last time zone before the midnight or not, you'll not let the last opportunity to celebrate New Year slip through your fingers).
*/

function newYearCelebrations(takeOffTime, minutes) {
    let count = 0
    let time = takeOffTime.split(':').map(a => Number(a))
    let currentTime = time
    let nextTime
    let pass = false
    minutes.forEach((minute, index) => {
        nextTime = getNextTime(time, minute)
        nextTime[0] -= index
        nextTime[0] = nextTime[0] < 0? 24 + nextTime[0]: nextTime[0]
        if(!pass){
            pass = passMidnight(currentTime, nextTime)
            count =  pass ? count+1:count 
        }
        nextTime[0] -= 1
        pass = pass && !((nextTime[0] === 0 && nextTime[1] === 0) || nextTime[0] < 0)
        nextTime[0] = nextTime[0] < 0? 24 + nextTime[0]: nextTime[0]
        currentTime = nextTime
    })
    if(!pass || (currentTime[0] === 0 && currentTime[1] ===0)) count++
    return count

}

function getNextTime(takeOffTime, minutes) {
    let extraMinutes = minutes % 60
    let hours = Math.floor(minutes / 60)
    let time = [...takeOffTime]
    time[0] += hours
    if(time[1] + extraMinutes >=60) time[0]++
    time[0] %= 24
    time[1] = (time[1] + extraMinutes) % 60
    return time
}

function passMidnight(firstTime, secondTime) {
    if(firstTime[0] === 0 && firstTime[1] === 0) return true
    if(secondTime[0] < firstTime[0] || (secondTime[0] === firstTime[0] && secondTime[1] < firstTime[1])) return true
    return false
    
    
}


//ES6 example:
const newYearCelebrations = (takeOffTime, minutes) => {
    const [h, m] = takeOffTime.split(':');
    let time = (h*60 + +m || 24*60) - 24*60;
    let result = 0;
    let elapsed = 0;
    for (let min of minutes) {
        min -= elapsed;
        elapsed += min;
        if (time <= 0 && time+min >= 0) result++;
        time += min - 60;
    }
    return result + (time <= 0);
};
