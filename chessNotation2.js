function chessNotation(notation) {
    var rowsRegex = /\w+/g
    var b = new Array(8);
    var match;
    var rowNumber = 0;
    while ((match = rowsRegex.exec(notation)) !== null) {
        b[rowNumber] = [];
        match = match[0];
        console.log(match);
        for (var i = 0; i < match.length; ++i) {
            var value = match[i];
            if (isNaN(value)) {
                b[rowNumber].push(value);
            } else {
                var emptySpaces = Number(value);
                for (var j = 0; j < emptySpaces; ++j) {
                    b[rowNumber].push(' ');
                }
            }
        }
        ++rowNumber;
    }
    
    console.log('BOARD');
    for (var i = 0; i < 8; ++i) console.log(b[i]);
    
    var rotated = new Array(8);
    for (var i = 0; i < 8; ++i) rotated[i] = new Array(8);
    for (var i = 0; i < 8; ++i) {
        for (var j = 0; j < 8; ++j) {
            rotated[j][7-i] = b[i][j];
        }
    }

    console.log('ROTATED');
    for (var i = 0; i < 8; ++i) console.log(rotated[i]);
    
    var result = '';
    for (var i = 0; i < 8; ++i) {
        var spaces = 0;
        for (var j = 0; j < 8; ++j) {
            var value = rotated[i][j];
            if (value !== ' ') {
                if (spaces > 0) {
                    result = result + spaces;
                    spaces = 0;
                }
                result = result + value;
            } else {
                ++spaces;
            }
        }
        if (spaces > 0) {
            result = result + spaces;
        }
        if (i < 7) {
            result = result + '/';
        }
    }
    
    return result;
}
