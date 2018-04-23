/*
You are implementing your own HTML editor. To make it more comfortable for developers you would like to add an auto-completion feature to it.

Given the starting HTML tag, find the appropriate end tag which your editor should propose.

If you are not familiar with HTML, consult with this note.

Example

For startTag = "<button type='button' disabled>", the output should be
htmlEndTagByStartTag(startTag) = "</button>";
For startTag = "<i>", the output should be
htmlEndTagByStartTag(startTag) = "</i>".

*/

function htmlEndTagByStartTag(startTag) {
let result = '';
    for(let key in startTag){
        result = result + startTag[key];
        if(startTag[key] == ' ') break;
    }
   result = result.substr(1);
   if(result[result.length-1] !== '>') return "</" + result.trim() +'>';
    return "</" + result.trim();
}

// es6 / regex

function htmlEndTagByStartTag(startTag) {
    return `</${startTag.split(' ')[0].replace(/</g, '').replace(/>/g, '')}>`
}
