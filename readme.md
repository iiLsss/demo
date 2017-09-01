# 基础知识总结

- HTML
- CSS
- JavaScript
  - 基本数据类型
  - 作用域与闭包
  - 原型和原型链
  - 面向对象
  - 异步和单线程
- 浏览器兼容
- H5C3
- vue
- node



- Ajax

```a
Ajax优点
 不需要插件的支持
 优秀的用户体验
 提高web程序的性能
 减轻服务器和带宽的负担
Ajax的不足
 浏览器对XMLHttpRequest对象的支持度不足
 破坏浏览器前进后退按钮的正常功能
 对搜素引擎的支持程度不够
 开发和调试工具的缺乏
使用原生js写ajax

1.定义一个函数，通过该函数来获取异步信息
function Ajax(){

}
2. 实例化一个XMLHttpRequest对象
var xhr = new XMLHttpRequest()
3.使用open()方法初始化XMLHttpRequest对象，指定HTTP方法和要使用的服务器URL
xhr.open('get', 'url', true)
4.使用send()发送请求，使用GET方式可以不指定参数或者使用null参数
xhr.send(null)
5.使用onreadystatechange = function(){
  if(xhr.ready.State == 4){
    if(xhr.status == 200){
      console.log(xhr.responseText)
    }
  }
}
  当请求状态改变时，XMLHtppRequest对象调用onreadeystatechange属性注册的时间处理器，在处理响应之前，
  时间处理器应该首先检查readyStatus的值和HTTP状态。当请求完成加载(readyStatus == 4) 并且响应已经成功(HTTP状态值为200),
  就可以处理响应内容
readyState对象状态值
0 (为初始化)对象已建立，但是尚未初始化(尚未调用open方法)
1 (初始化)对象已建立，尚未调用send方法
2 (发送数据)send方法以调用，但是当前状态及http头未知
3 (数据传送中)已接收部分数据，因为响应及http头不全，这是通过responseText获取完整的回应数据
4 (完成)数据接收完毕，此时可以通过responseXML和responseText获取完整的回应数据
```

### webpack

- webpack与gulp区别

```a
webpack是一个前端模块化方案，更侧重模块打包，我们可以把开发中的所有资源（图片、js文件、css文件等）都看成模块，
通过loader（加载器）和plugins（插件）对资源进行处理，打包成符合生产环境部署的前端资源。

gulp强调的是前端开发的工作流程，我们可以通过配置一系列的task，定义task处理的事务（例如文件压缩合并、雪碧图、
启动server、版本控制等），然后定义执行顺序，来让gulp执行这些task，从而构建项目的整个前端开发流程。
```

- [兼容性问题](https://github.com/zuojj/fedlab/issues/5)
  - IE8以下 v1.15.0版本

- 常用loader plugin

```a
CSS     style-loader,css-loader,postcss 注意加载顺序
图片    url-loader
HTML    html-loader
ES6转义 babel-loader，babel-preset-es2015，babel-preset-react

提取公共组件  webpack.optimize.CommonsChunkPlugin
CSS单独打包   ExtractTextPlugin
html模板处理  HtmlWebpackPlugin
```

- webpack 如何为项目全局引用第三方插件?

```a
  /* 加载外部的jq */
  externals: {
    'jquery':'window.jQuery'
  },
  <script src="https://cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
```

### 浏览器兼容性

- [浏览器兼容性汇总](https://juejin.im/post/59a3f2fe6fb9a0249471cbb4?utm_source=gold_browser_extension)

```a

```