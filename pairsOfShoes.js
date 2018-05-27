/*
Yesterday you found some shoes in the back of your closet. Each shoe is described by two values:

type indicates if it's a left or a right shoe;
size is the size of the shoe.
Your task is to check whether it is possible to pair the shoes you found in such a way that each pair consists of a right and a left shoe of an equal size.

Example

For

shoes = [[0, 21], 
         [1, 23], 
         [1, 21], 
         [0, 23]]
the output should be
pairOfShoes(shoes) = true;

For

shoes = [[0, 21], 
         [1, 23], 
         [1, 21], 
         [1, 23]]
the output should be
pairOfShoes(shoes) = false.

/*
function pairOfShoes(shoes) {
    for (i = 0; i < shoes.length; i++) {
        var found = false;
        
        for (j = i + 1; j < shoes.length; j++) {
            if (shoes[i][0] ^ shoes[j][0]
                && shoes[i][1] === shoes[j][1]) {
                found = true;
                shoes.splice(j, 1);
                break;
            }            
        }
    }
    
    return found;
}
