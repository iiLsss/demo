'use strict';

var _console;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

/*
 * @Author: iiLsss 
 * @Date: 2017-09-02 08:32:59 
 * @Last Modified by: iiLss
 * @Last Modified time: 2017-09-05 22:23:14
 */

// {
//   let lsss = 'lsss';
//   var ii = 'ii';
// }
// console.log(ii); // ii
// console.log(lsss); // lsss is not defined

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(i);  i is not defined

// for (let i = 0; i < 5; i++ ) {
//   setTimeout(function(){
//     console.log(i);
//   },2000)
// }// 2s 后输出 0 1 2 3 4 5


// for (let i = 0; i < 3; i++) {
//   let i = 'lsss';
//   console.log(i);
// }
// // 输出3 次 lsss

// console.log(lsss);
// var lsss = 2;

// console.log(ii);
// let ii = 2;

// let [a, b, c] = [1, 2, 3]
// console.log(a); 
// console.log(b);
// console.log(c);

// let [a,b = 'lsss'] = ['ii', null]
// console.log(a+b); iilsss

// let { ii, lsss} = { ii: 'ii', lsss: 'lsss'}
// console.log(ii); ii
// console.log(lsss); lsss

// let foo;
// ({foo} = {foo:'iiLsss'})
// console.log(foo);

var _iiLsss = 'iiLsss',
    _iiLsss2 = _slicedToArray(_iiLsss, 6),
    a = _iiLsss2[0],
    b = _iiLsss2[1],
    c = _iiLsss2[2],
    d = _iiLsss2[3],
    e = _iiLsss2[4],
    f = _iiLsss2[5];

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

(_console = console).log.apply(_console, [1, 2, 3, 4]);

function push(array) {
  for (var _len = arguments.length, items = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    items[_key - 1] = arguments[_key];
  }

  array.push.apply(array, items);
  console.log(array);
}
push.apply(undefined, [[5]].concat(['x', 'x', 'y', 'z']));
// let foo;
// ({foo} = {foo:'lsss'})
// console.log(foo);

// const [a,b,c,d] ='lsss'
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
