
- Q：两边宽度固定中间宽度自适应

圣杯布局和双飞翼布局基本上是一致的，都是两边固定宽度，中间自适应的三栏布局，其中，中间栏放到文档流前面，保证先行渲染。解决方案大体相同，都是三栏全部float:left浮动，区别在于解决中间栏div的内容不被遮挡上，圣杯布局是中间栏在添加相对定位，并配合left和right属性，效果上表现为三栏是单独分开的（如果可以看到空隙的话），而双飞翼布局是在中间栏的div中嵌套一个div，内容写在嵌套的div里，然后对嵌套的div设置margin-left和margin-right，效果上表现为左右两栏在中间栏的上面，中间栏还是100%宽度，只不过中间栏的内容通过margin的值显示在中间。

圣杯布局

html结构

```a
  <div class="container">
    <div class="middle">我是中间</div>
    <div class="left">我是左边</div>
    <div class="right">我是右边</div>
  </div>
```

双飞翼布局

```a
  <div class="container">
    <div class="middle">中间</div>
  </div>
  <div class="left">左边</div>
  <div class="right">右边</div>

```