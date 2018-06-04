/*
You are given an array of desired filenames in the order of their creation. Since two files cannot have equal names, the one which comes later will have an addition to its name in a form of (k), where k is the smallest positive integer such that the obtained name is not used yet.

Return an array of names that will be given to the files.

Example

For names = ["doc", "doc", "image", "doc(1)", "doc"], the output should be
fileNaming(names) = ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.string names

Guaranteed constraints:
5 ≤ names.length ≤ 15,
1 ≤ names[i].length ≤ 15.
*/

function fileNaming(names) {
  let filenames = [];

  for(let name of names) {
    if(filenames.includes(name)){
      let instances = 1;
      let newName = name + "(" + instances + ")";
      while(filenames.includes(newName)){
        instances++;
        newName = name + "(" + instances + ")"
      }
      filenames.push(newName);
      } else {
    filenames.push(name);
  }
}
  return filenames;

}

//Or this method:

const extFileMatch = /^(.*)\((\d+)\)$/

const getExtId = (registered, key) => {
    let result = 0
    if (registered[key] == undefined) return result
    while ((registered[key][result] != undefined) && registered[key][result] && (result < 10000)) {
        result++
    }
    return result    
}

function fileNaming(names) {
    let result = []
    let registered = {}
    // for each filename
    for (name of names) {
        console.log("name: ", name)
        // if the name is in the registered list
        if (registered[name] && registered[name][0]) {
            // get the lowest available number for the basename
            let id = getExtId(registered, name)
            console.log("  id", id)
            // register that number
            registered[name][id] = true
            // update the filename with the extension number
            name += "(" + id + ")"
            result.push(name)
            registered[name] = {0: true}
            console.log("  new name", name)
        } else {
            // register the name
            if (registered[name] == undefined) {
                registered[name] = {0: true}
            } else {
                registered[name][0] = true
            }
            result.push(name)
        }
        // if the name has parentheses
        if (extFileMatch.test(name)) {
            let matches = name.match(extFileMatch)
            console.log("matches")
            console.log(matches)
            if (matches.length > 2) {
                // get the base name and the extension number
                let baseName = matches[1]
                let extId = matches[2]
                // register that extension for the base name
                if (registered[baseName] == undefined) {
                    registered[baseName] = {0: false}                    
                }
                registered[baseName][extId] = true
                console.log("**", baseName, extId)
                console.log(registered)
            }
        }
    }
    console.log("registered")
    console.log(registered)
    return result
}
