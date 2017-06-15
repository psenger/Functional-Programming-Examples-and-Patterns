
let btree = {
  value: 'a',
  left: {
    value: 'aa',
    left: {
      value: 'aaa',
      left: {
        value: 'aaaa',
        left:null,
        right:null
      },
      right : {
        value: 'bbbb',
        left:null,
        right:null
      }
    },
    right : {
      value: 'bbb',
      left: {
        value: 'cccc',
        left:null,
        right:null
      },
      right : {
        value: 'dddd',
        left:null,
        right:null
      }
    }
  },
  right : {
    value: 'bb',
    left: {
      value: 'ccc',
      left: {
        value: 'eeee',
        left:null,
        right:null
      },
      right : {
        value: 'ffff',
        left:null,
        right:null
      }
    },
    right : {
      value: 'ddd',
      left: {
        value: 'gggg',
        left:null,
        right:null
      },
      right : {
        value: 'hhhh',
        left:null,
        right:null
      }
    }
  }
};

/**
 * Delegating to another generator means the current generator stops producing values by itself,
 * instead yielding the values produced by another generator or iterator until it exhausts it.
 * It then resumes producing its own values, if any.
 */
function* DFSTraverseTree(node) {
  if (node === null) {
    //console.log( 'reached the bottom' );
    return;
  }
  yield* DFSTraverseTree(node.left);
  yield* DFSTraverseTree(node.right);
  yield node.value;
}

let traverseTree = DFSTraverseTree( btree );

// do {
//   let { value, done } = traverseTree.next();
//   if ( done ) break;
//   console.log( value );
// } while( true );

for (v of traverseTree ) {
  console.log(v);
}

