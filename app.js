// var Box = function(x){
//     return {
//         map: function (f){ return Box(f(x)); },
//         inspect: function (){ return "Box("+ x + ")" }
//     };
// };
const Box = x => ({
    map: f => Box(f(x)),
    inspect: () => `Box(${x})` // inspect is a ES6 method used for console.log
});

const nextCharForNumberString = str =>
    Box(str)
        .map(s => s.trim())
        .map(r => parseInt(r))
        .map(i => i + 1)
        .map(i => String.fromCharCode(i));

const testHarnes = '   64   ';

const result = nextCharForNumberString(testHarnes);
console.log('Just Result = ',result);
console.log('Just Box = ',Box(testHarnes));

