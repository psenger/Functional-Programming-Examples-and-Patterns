const capitialze = str => str[0].toUpperCase() + str.substring(1);
const doubleSay = str => str + ', ' + str;
const exclaim = str => str + '!';
const pipeline = (...funcs) => {
  return (val) => {
    let lastResult;
    for ( func of funcs ) {
      lastResult = func( lastResult || val );
    }
    return lastResult;
  }
};

// traditional chained, must be read backwards.
const chained = exclaim(capitialze(doubleSay('hello')));

// not sure piped makes more sense, but it reads a little better
const piped = pipeline(doubleSay,capitialze,exclaim)('hello');

console.log( chained, piped );
