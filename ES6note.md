# es6

[文档](http://es6.ruanyifeng.com/#docs/intro)

## Babel

[babel](http://babeljs.io/)使用方法

```a
安装babel-cli 和 babel-preset-es2015 插件
npm install -g babel-cli
npm install --save babel-preset-es2015
```

在目录下建立文件.babelrc

```a
{
  "presets":["es2015"]
}
```

## 声明方式

- let 局部声明

let声明变量，只在let命令所在代码块内有效

```let
{
  let lsss = 'lsss';
  var ii = 'ii';
}
console.log(ii); // ii
console.log(lsss); // lsss is not defined
```

```for
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log(i);  i is not defined

for (let i = 0; i < 5; i++ ) {
  setTimeout(function(){
    console.log(i);
  },2000)
}
// 2s 后输出 0 1 2 3 4 5
变量i是let声明的，当前的i只在本轮循环有效，所以每一次循坏的i其实都是一个新变量。
```

另外，for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。

```for
for (let i = 0; i < 3; i++) {
  let i = 'lsss';
  console.log(i);
}
// 输出3 次 lsss
```

let不存在变量提升，它所声明的变量一定要在声明后使用，否则报错

只要在块级作用域额内存在let声明，它所声明的的变量就"绑定"(binding)这个区域，
不再受外部的影响。

let不允许在相同作用域内，重复声明同一个变量。

- const命令 只读的常量，一旦声明，常量的值就不能改变

顶层对象属性，在浏览器环境指的是window对象，在Node指的是global对象。ES5之中，顶层对象的属性与全局变量是等价的。

## 数据解构

- 数组

```array
let [a, b, c] = [1, 2, 3]
console.log(a);  1
console.log(b);  2
console.log(c);  3
从数组中提取值，按照对应位置，对变量赋值

let [foo = true] =[];
console.log(foo); true
解构赋值是允许使用默认值

let [a,b = 'lsss'] = ['ii']
console.log(a+b); iilsss

let [a,b = 'lsss'] = ['ii', undefined]
console.log(a+b); iilsss
let [a,b = 'lsss'] = ['ii', null]
console.log(a+b); iinull
undefined 相当于没有，b是默认值
null相当于有值，但值为null，所以b没有取默认值
```

- 对象

```Object
let { ii, lsss} = { ii: 'ii', lsss: 'lsss'}
console.log(ii); ii
console.log(lsss); lsss
对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值
由它的位置决定;而对象的属性没有次序，变量必须与属性同名。才能取到正确的值
```

圆括号的使用

```()
let foo;
{foo} = {foo:'iiLsss'}
console.log(foo);Unexpected token =
报错

let foo;
({foo} = {foo:'iiLsss'})
console.log(foo); iiLsss
```

- 字符串解构

```string
const [a, b, c, d, e, f] = 'iiLsss'
console.log(a); i
console.log(b); i
console.log(c); L
console.log(d); s
console.log(e); s
console.log(f); s
```

## 扩展运算符

- 扩展运算符是三个点(...)。讲一个数组转为逗号分隔的参数序列

```...

console.log(...[1,2,3,4]) // 1 2 3 4
console.log(1, ...[2, 3, 4], 5)  // 1 2 3 4 5

[...document.querySelectorAll('div')] // [<div>, <div>, <div>]
```

改运算符只要用于函数调用

```function

function push(array, ...items){
  array.push(...items)
  console.log(array);
}
push([5],...['x', 'x', 'y', 'z'])
[5, "x", "x", "y", "z"]
```

扩展运算符与正常的函数参数可以结合使用，非常灵活

```a
function f(v, w, x, y, z){}
var args = [0, 1]
f(-1, ...args, 2, ...[3])

```

扩展运算符后面还可以放置表达式

```a
const arr = [...(x > 0 ? ['lsss'] : []), 'LSSS']

```

如果扩展运算符后面是一个空数组，则不产生任何效果。

```a
[...[], 4]
//[4]

```

> 声明两个数组arr1和arr2，然后我们把arr1赋值给arr2，然后我们改变arr2的值，你会发现arr1的值也改变了，因为我们这是对内存堆栈的引用，而不是真正的赋值。利用对象扩展运算符简单的解决这个问题

```a
let arr1 = ['a', 'b', 'c']
let arr2 = arr1
arr2.push('d')
console.log(arr1); //["a", "b", "c", "d"]
会改变arr1数组的值

let arr1 = ['a', 'b', 'c']
let arr2 = [...arr1]
arr2.push('d')
console.log(arr1); //["a", "b", "c"]
不会改变arr1数组的值

```

## 字符串模板
