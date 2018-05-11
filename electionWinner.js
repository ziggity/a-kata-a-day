/*
Elections are in progress!

Given an array of the numbers of votes given to each of the candidates so far, and an integer k equal to the number of voters who haven't cast their vote yet, find the number of candidates who still have a chance to win the election.

The winner of the election must secure strictly more votes than any other candidate. If two or more candidates receive the same (maximum) number of votes, assume there is no winner at all.

Example

For votes = [2, 3, 5, 2] and k = 3, the output should be
electionsWinners(votes, k) = 2.

The first candidate got 2 votes. Even if all of the remaining 3 candidates vote for him, he will still have only 5 votes, i.e. the same number as the third candidate, so there will be no winner.
The second candidate can win if all the remaining candidates vote for him (3 + 3 = 6 > 5).
The third candidate can win even if none of the remaining candidates vote for him. For example, if each of the remaining voters cast their votes for each of his opponents, he will still be the winner (the votes array will thus be [3, 4, 5, 3]).
The last candidate can't win no matter what (for the same reason as the first candidate).
Thus, only 2 candidates can win (the second and the third), which is the answer.
*/
function electionsWinners(votes, k) {
    var candWhoCanWin = 0;
    if(k === 0){
        if(Math.max(...votes) == Math.min(...votes)) return candWhoCanWin;
        if(votes.sort() && votes[votes.length-1] == votes[votes.length-2]) return 0
         if(Math.max(...votes)){
              candWhoCanWin++;
         };
    }
    let highest = Math.max(...votes)
    for(let vote in votes){
        if(votes[vote] +k > highest) candWhoCanWin++
       
    }
    return candWhoCanWin
}

// other method

function electionsWinners(votes, k) {
    m=Math.max(...votes);
    return k?votes.map(v=>v+k>m&&r++,r=0)|r:votes.filter(v=>v==m).length<2|0
}


// other way

function electionsWinners(votes, k) {

    var result = 0;
    for( var i=0; i<votes.length; i++ ) {
        var iPlusK = votes[i]+k;
        
        var ok = true;
        for( var j=0; j<votes.length && ok; j++ ) {
            if( i !== j && votes[j] >= iPlusK ) {
                ok = false;
            }
        }
        
        if( ok ) {
            result++;
        }
    }
    
    return result;
}

// other 
function electionsWinners(votes, k) {
    var m = votes.reduce((a, b) => Math.max(a,b), 0);
    if (k === 0) {
        return votes.reduce((c, v) => v === m ? c + 1: c, 0) === 1 ? 1 : 0;
    }
    return votes.reduce((c, v) => v + k > m ? c + 1 : c, 0);
}
