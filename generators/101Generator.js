function *Simple( x ) {
  yield ( x + 1 );
  return ( x + 2 );
}

let simple = Simple(10);
console.log( simple.next() );
console.log( simple.next() );
