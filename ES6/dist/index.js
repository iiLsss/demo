'use strict';

/*
 * @Author: iiLsss 
 * @Date: 2017-09-02 08:32:59 
 * @Last Modified by: iiLss
 * @Last Modified time: 2017-09-06 15:43:48
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


var A = { a: '', b: '' };
var B = { a: 999, b: 888, c: 777, d: 666 }[(B, A)] = [A, B];

var x = 1;
var y = 2;

var _ref = [y, x];
x = _ref[0];
y = _ref[1];

console.log(x);
console.log(y);
// console.log(b);

// let foo;
// ({foo} = {foo:'lsss'})
// console.log(foo);

// const [a,b,c,d] ='lsss'
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
