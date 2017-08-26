## flex布局

flex 的使用方法很简单，只需要将其 display 属性设置为 flex 就可以，也可以设置行内的 flex，记得 Webkit 内核的浏览器，必须加上 -webkit 前缀。注意，设为 Flex 布局以后，子元素的 float、clear 和 vertical-align 属性将失效。


- Q：两边宽度固定中间宽度自适应

圣杯布局和双飞翼布局基本上是一致的，都是两边固定宽度，中间自适应的三栏布局，其中，中间栏放到文档流前面，保证先行渲染。解决方案大体相同，都是三栏全部float:left浮动，区别在于解决中间栏div的内容不被遮挡上，圣杯布局是中间栏在添加相对定位，并配合left和right属性，效果上表现为三栏是单独分开的（如果可以看到空隙的话），而双飞翼布局是在中间栏的div中嵌套一个div，内容写在嵌套的div里，然后对嵌套的div设置margin-left和margin-right，效果上表现为左右两栏在中间栏的上面，中间栏还是100%宽度，只不过中间栏的内容通过margin的值显示在中间。

##### 圣杯布局

对.middle .left .right 分别设置float:left

```a
    .middle {
      float: left;
      width: 100%;
      height: 200px;
      background: orange;
    }
    .left,
    .right {
      float: left;
      width: 200px;
      height: 200px;
      background: blueviolet;
    }
```

设置完成后 .middle独占一行.left与.right在下一行。

在分别对.left设置margin-left:-100% .right设置margin-left:-width*2

```a
    .left {
      margin-left: -100%;
    }

    .right {
      margin-left: -200px;
    }
```

完成后 middle left right 在同一行显示 并且中间自适应但是 中间内容被left遮住
需要对容器设置padding 然后对left right进行相对定位，放到两边

```a
.container {
    padding: 0 200px;
}
.left,
.right {
  position:relative;
}
.left {
  left:-200px
}

.right {
  right:-200px;
}
```

全部代码

```a
  <div class="container">
    <div class="middle">我是中间</div>
    <div class="left">我是左边</div>
    <div class="right">我是右边</div>
  </div>

  <style>
    * {
      margin: 0;
      padding: 0;
    }

    .container {
       padding: 0 200px; 
    }
    .middle {
      float: left;
      width: 100%;
      height: 200px;
      background: orange;
    }
    .left,
    .right {
      position:relative;
      float: left;
      width: 200px;
      height: 200px;
      background: blueviolet;
    }

    .left {
      margin-left: -100%;
      left:-200px
    }

    .right {
      margin-left: -200px;
      right:-200px;
    }
  </style>

```

##### 双飞翼布局

双飞翼布局这是把middle外边套了一个容器，
完成一排布局以后，在contaner内加入.middle 对其设置margin：0 200px

```a
  <div class="container">
    <div class="middle">中间</div>
  </div>
  <div class="left">左边</div>
  <div class="right">右边</div>
  <style>
    *{
      margin:0;
      padding:0;
    }
    .middle{
      margin:0 200px
    }
    .container {
      float: left;
      width: 100%;
      height: 200px;
      background: orange;
    }
    .left,
    .right {
      float: left;
      width: 200px;
      height: 200px;
      background: blueviolet;
    }

    .left {
      margin-left: -100%;
    }

    .right {
      margin-left: -200px;
    }
```