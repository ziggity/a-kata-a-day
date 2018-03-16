/*
You have a list of dishes. Each dish is associated with a list of ingredients used to prepare it. You want to group the dishes by ingredients, so that for each ingredient you'll be able to find all the dishes that contain it (if there are at least 2 such dishes).

Return an array where each element is a list with the first element equal to the name of the ingredient and all of the other elements equal to the names of dishes that contain this ingredient. The dishes inside each list should be sorted lexicographically. The result array should be sorted lexicographically by the names of the ingredients in its elements.
*/
function groupingDishes(dishes) {
  let currentDish;
  let grouping = {};

  for (let i = 0; i < dishes.length; i++) {
    currentDish = dishes[i][0];

    for (let j = 1; j < dishes[i].length; j++) {
      if (grouping[dishes[i][j]] != undefined) {
        grouping[dishes[i][j]].push(currentDish);
      } else {
        grouping[dishes[i][j]] = [currentDish];
      }
    }
  }

  Object.keys(grouping).forEach( ingredient => {
    if (grouping[ingredient].length < 2) {
      delete grouping[ingredient];
    }
  });

  let sortedIngredients = Object.keys(grouping).sort();

  let result = [];

  for (let i = 0; i < sortedIngredients.length; i++) {
    let curIngredient = sortedIngredients[i];
    result.push([curIngredient].concat(grouping[curIngredient].sort()));
  }

  return result;
}
