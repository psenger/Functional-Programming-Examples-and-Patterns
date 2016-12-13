/**
 * Created by psenger on 12/13/16.
 */
const { compose } = require('ramda');
const { mconcat } = require('pointfree-fantasy');

const Url = String;

const baseUrl = 'http://foo.com?something={VAL}';

const concat = (x,y) => x+y;
const empty = () => "";


const makeUrl = (val) => {
    let {start,end} = baseUrl.split('{VAL}');
    return mconcat([start , val , end]);
}
