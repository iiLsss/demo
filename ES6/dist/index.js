'use strict';

/*
 * @Author: iiLsss 
 * @Date: 2017-09-02 08:32:59 
 * @Last Modified by: iiLsss
 * @Last Modified time: 2018-03-06 16:36:19
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

// const [a, b, c, d, e, f] = 'iiLsss'
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);

// console.log(...[1,2,3,4]);

// function push(array, ...items){
//   array.push(...items)
//   console.log(array);
// }
// push([5],...['x', 'x', 'y', 'z'])

// let arr1 = ['a', 'b', 'c']
// let arr2 = [...arr1]
// arr2.push('d')
// console.log(arr1); //["a", "b", "c", "d"]

// for (let codePoint of 'lsss') {
//   console.log(codePoint);
// }// l s s s 


// let A = {a:'', b:''}
// let B = {a:999, b:888, c:777, d:666}

// [B, A] = [A, B]


// let x = 1;
// let y = 2;

// [x, y] = [y, x]
// console.log(x);
// console.log(y);
// console.log(b);

// let foo;
// ({foo} = {foo:'lsss'})
// console.log(foo);

// const [a,b,c,d] ='lsss'
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// let json = {
//   '0': 'l',
//   '1': {
//     '0':'aaa',
//     '1':'bbb',
//     '2':12123,
//     length: 3
//   },
//   '2': 100,
//   length:3
// }
// let arr = Array.from(json)
// console.log(arr);

// let arr1 = Array.of(2, 3, 4, 5)
// console.log(arr1)

// let arr3 = ['a', 'b', 'c', 'b', 'e', 'f', 'g', 'h']
// arr3.fill('lsss', 2, 5)
// console.log(arr3)

// 从 把 替换 2 3 4 替换

var arr = ['a', 'b', 'c', 'b', 'e', 'f', 'g', 'h'];
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var item = _step.value;

    console.log(item);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = arr.keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var index = _step2.value;

    console.log(index);
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}
