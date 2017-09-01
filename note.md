
```a
  console.log(0 || 1); // 1
  console.log(1 + 2 + 3 + "5"); //65
  function fn(a){
    arguments[0] = 2
    console.log(a);
  }
  fn(1)
  var a = 888
  ++a;
  console.log(a++); //889

  var name = 'World';
  (function () {
    if (typeof name === 'undefined') {
      var name = 'Jack'
      console.log('Goodbye' + name);
    } else {
      console.log('Hello' + name);
    }
  })()
  //  GoodbyeJack

  // 6  ABCDE
  // 7  A
  // 8 
  // 9  multipart/form-data
  // 10 ABCD
  // 11
  var str =  "I am a lasagna hog"
  var rts = str.split('').reverse().join('')
  console.log(rts);  //goh angasal a ma I
  
  // 200 请求成功 请求资源返回客户端
  // 301 本网页被永久性转移到另一个URL
  // 404 请求资源不存在
  // 500 服务器错误

  // !important < id < class < tag

  /* 
  express  nodejs 框架
  webpack  构建工具
  MDN moilzza
  sass 
  babel JavaScript 编译器
  mongodb 非关系数据库
  open source
  gulp
  github
  typescript
  bootstrap
  python
  StackOverflow
  browserify
  nginx 
  issue

   */

  //  1.跨域通信通常的方法
  //  JSONP  服务端设置header头
  // header('Access-Control-Allow-Origin:*');//允许所有来源访问
  // header('Access-Control-Allow-Method:POST,GET');//允许访问的方式

```

## js对象拷贝

```a
var obj = {
  name: 'lsss',
  age: 18,
  sex: 'male',
  fn: function(){
    var abc= 7
  }
}
function copy(obj) {
  var result = {}
  for(var key in obj){
    result[key] = obj[key]
  }
  return result
}
var obj2 = copy(obj)
console.log(obj2);

使用json对象进行拷贝
function jsonClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}
var clone = jsonClone({ a:1 });

使用jquery进行拷贝

var o = {a: [1]};

//浅拷贝
var o1 = $.extend({}, o);
console.log(o1.a === o.a);  // true

//深拷贝
var o2 = $.extend(true, {}, o);
console.log(o2.a === o.a);  //false

```

### 


3 图片加载慢
```a


开始用压缩过的体积小的图，等加载完毕后，再用高清无码图来替换掉
```

- zepto 用于移动端 所有动画基于css3 transition transform 属性

native app 用原声平台语言进行开发app
web app 移动端浏览器页面
hybrid app 混合app 原生的壳子
不经常变化的用原生去写，经常变的用web技术来写，可以实现热更新，绕过苹果审核
react native 只要分为两个部分 底层是原生的，中间有个桥bridge 


html


1.Doctype告知浏览器的解析器用什么文档标准解析文档
2.标准模式的排版与js运作模式都是以浏览器支持的最高标准运行，兼容模式是页面也向后兼容方式显示，

文件选择框
<input type='file'/>
注意 如果有文件上传，必须将表单enctype 更改为 multipart/form data
disabled 禁用控件
readonly 只读
checked 默认

<textarea rows="3" cols="20" >文本域</textarea>  col 行 row列
resize:none  禁止拉伸


css

style 
link 可以引用其他文件
@import 先加载html 后加载css
兼容IE5 以上
只能引用css 文件

选择器 
 通配符选择器
 标签选择器
 id 选择器
 类选择器
 群组选择器
 后代选择器
 子代选择器
 伪类选择器

 overflow： visible hidden scroll auto

 标准盒模型： margin  border padding  content
 ie盒模型： margin  content

 border： 1px  solid/double/hash
 border-image
 border-radius
 box-shadow
 transparent
 background
 background-color
 background-image
 background-repeat
 background-attachment  fixed | scroll | local
 background-position center left right top bottom
 background-origin padding-box border-box content-box
 background-clip  border-box | padding-box | content-box | text
 background-size 
                auto：
                背景图像的真实大小。
                cover：
                将背景图像等比缩放到完全覆盖容器，背景图像有可能超出容器。
                contain：
                将背景图像等比缩放到宽度或高度与容器的宽度或高度相等，背景图像始终被包含在容器内。

color
opacity filter:alpha(opacity = 50) ie8以下
opacity 0-1

font
  font 
  font-style
            normal：指定文本字体样式为正常的字体
            italic：指定文本字体样式为斜体。对于没有设计斜体的特殊字体，如果要使用斜体外观将应用oblique
            oblique：指定文本字体样式为倾斜的字体。人为的使文字倾斜，而不是去选取字体中的斜体字
  font-weight
            normal：正常的字体
            small-caps：小型的大写字母字体
  font-size
  font-family
  font-stretch
  font-size-adjust


1. 如何清除图片下方出现的几像素的空白间隙

```a
1 img{display:block}
2 img{vertical-align:top}
3 .father{font-size:0; line-height:0}
```

2. 如何让文本垂直对齐输入框

```a
input{vertical-align:middle}
```

3. 如何让单行文本在容器内垂直居中

```
.text{height:25px; line-height:25px}
```

4. 如何让超链接访问后和访问前的颜色不同后仍保留hover和active效果

```
a:link{color:#03c}
a:visited{color:#666}
a:hover{color:#f30}
a:active{color:#c30}
```

5. 为什么在Standard mode下IE无法设置滚动条的颜色

```
html{
	scrollbar-3dlight-color:#999;
	scrollbar-darkshadow-color:#999;
	scrollbar-highlight-color:#fff;
	scrollbar-shadow-color:#eee;
	scrollbar-arrow-color:#000;
	scrollbar-face-color:#ddd;
	scrollbar-track-color:#eee;
	scrollbar-base-color:#ddd;
}
将原来设置在body上的滚动条样式定义到html标签选择器上
```

6. 如何使文本溢出边界不换行强制在一行内显示

```
#test{width:150px;white-space:nowrap;}
设置容器的宽度和white-space为nowrap即可，其效果类似<nobr>标签
```

7. 如何使文本溢出边界显示为省略号？

```
#test{width:150px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
首先需设置将文本强制在一行内显示，然后将溢出的文本通过overflow:hidden截断，并以text-overflow:ellipsis方式将截断的文本显示为省略号。
width
white-space nowrap
overflow:hidden
text-overflow:ellopsis
```

8. 如何使连续的长字符串自动换行

```
.test{width:150px;word-wrap:break-word;}
word-wrap的break-word值允许单词内换行
```

9. 如何清除浮动

```

方法1：
.test{clear:both;}
.test为浮动元素的下一个兄弟元素
方法2：
.test{display:block;zoom:1;overflow:hidden;}
.test为浮动元素的父元素。zoom:1也可以替换为固定的width或height
方法3：
.test{zoom:1;}
.test:after{display:block;clear:both;visibility:hidden;height:0;content:'';}
.test为浮动元素的父元素
```

10. 如何定义鼠标指针的光标形状为手型并兼容所有浏览器

```
.test{cursor:pointer;}
若将cursor设置为hand，将只有IE和Opera支持，且hand为非标准属性值
```

11. 如何让已知高度的容器在页面中水平垂直居中？

```
.text{position:absolute;top:50%;left:50%;width:200px;height:200px;margin:-100px 0 0 -100px}
已知高宽
```

12. 如何让未知尺寸的图片在已知宽高的容器内水平垂直居中

```
.text{position:absolute; top:0; right:0; bottom:0; left:0;margin:auto}

.father{
  display:flex;
  justify-content：center子容器在主轴的排列方向。
  align-items：center 子容器在交叉轴的排列方向。
}
```

13. 如何设置span的宽度和高度

```
display
float
position
```

14. 如何让某个元素充满整个页面？

```
html,body{height:100%;margin:0;}
#test{height:100%;}
```

15. 如何让某个元素距离窗口上右下左4边各10像素？

```
html, body{height:100%; width:100%;}
body{padding:10px;box-sizing: border-box}
div{width:100%; height:100%;background: orange;}
```

16. 如何去掉超链接的虚线框

```
a{outline:none}
```

17. 如何容器透明，内容不透明

```

```


1. Doctype作用？标准模式与兼容模式各有什么区别?
2. 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？
3. html5有哪些新特性、移除了那些元素？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和 HTML5
4. 简述一下你对HTML语义化的理解？
5. 标签上的title和alt属性的区别
6. 介绍一下标准的CSS的盒子模型？低版本IE的盒子模型有什么不同的？
7. 请你写出三列布局,左右各200px,中间自适应
8. 请简要描述em和rem的区别
9. CSS优先级算法如何计算？
10. div垂直水平居中
11. js中== 和 ===的区别
12. 反转字符串
13. 数组去重、原型扩展
14. Ajax 是什么? 如何创建一个Ajax？
15. 简要说明Ajax优缺点
16. 解释jquery的时间委托机制和应用场景
17. URL 到页面加载显示完成，这个过程中都发生了什么
18. 浏览器渲染页面的过程
19. 实现跨域的几种方式
20. 列出前端减少页面加载时间的三种方式

### 关于VUE常问的问题
1. vue1与vue2的区别
2. vue 兄弟组件 父子组件传值
3. vue 声明周期
4. vue 中created computed 用来做什么 使用场景
5. vue-router的原理



