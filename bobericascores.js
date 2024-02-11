// */ ---- Erica and Bob compare scores ---- */
// Erica and Bob participate in a friendly Hackathon that
// allows each one to solve one question a day out of the
// three offered. There will be one easy, one medium and
// one hard question, with points awarded based on
// difficulty. The winner is the one with the highest score at
// the end of the competition based on the following scale:
// Scoring table
// Difficulty
// Easy (E)
// Medium (M)
// Hard (H)
// Example
// erica=["E"]
// bob=["E"]
// Points
// 1
// 3
// 5
// There are two strings, erica and bob. Each character
// erica[i] and bob[i] represent the difficulties of the
// problems ("E","M",H") solved on day[i] by Erica and Bob.
// The scoring table associates the points for each question
// difficulty. Calculate the scores for Erica and Bob. Return
// the name of the winner: "Erica", "Bob" or "Tie" if they have
// the same score.
// */ --- Solution uses arrays and reduce method, and we create an object with keys and values with difficulty (easy :1, medium 3, hard 5)--- */

function calculateScores(erica, bob) {
  const scoringTable = { E: 1, M: 3, H: 5 };

  const ericaScore = erica.reduce(
    (total, difficulty) => total + scoringTable[difficulty], 0);
  const bobScore = bob.reduce(
    (total, difficulty) => total + scoringTable[difficulty], 0);
  if (ericaScore > bobScore) {
    return "Erica";
  } else if (bobScore > ericaScore) {
    return "Bob";
  } else {
    return "Tie";
  }
}

// Example usage:
const erica = ["E", "M", "M"];
const bob = ["E", "H", "H"];

const winner = calculateScores(erica, bob);
console.log("The winner is: " + winner);
