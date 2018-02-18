function isCryptSolution(crypt, solution) {
    let finalResult = true;
    solution = solution.reduce((accum, pair) => {
        accum[pair[0]] = pair[1]
        return accum
    },{});
    let result = crypt.map(word => {
        let num = '';
        word.split('').forEach(letter => {
            num += solution[letter];
        })
        return num;
    })
    if((+result[0] + +result[1] !== +result[2])){
        finalResult = false;
    }
    if((result[0][0] === '0' || result[1][0] === '0' || result[2][0] === '0') && result[0].length !== 1){
        finalResult = false;
    }
    return finalResult
}
