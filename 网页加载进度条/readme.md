# 制造精度条

## 通过定时器进行加载

> 进入页面开始利用定时器写动画

## 通过加载状态进行加载

- 通过加载状态事件制造精度条

document.onreadystatechange 页面加载状态改变时的事件
document.readyState 返回当前文档的状态

1. uninitialized 还未开始载入
2. loading 载入中
3. interactive 已加载，文档与用户可以开始交互
4. complete 载入完成

```a
<script>
  document.onreadystatechange = function(){
    console.log(document.readyState);
    if(document.readyState === 'complete') {
       var oLoading = document.getElementsByClassName('loading')[0]
      oLoading.style.display = "none"
    }
  }
</script>
```

## CSS3

- 入口动画利用CSS3动画
- 定位在头部的进度条

## 实时加载数据的进度条

- 建立图像对象：图像对象名称= new Image（）
- 属性：border complete height
- 事件： onload onerror onkeydown onkeypress
- src属性一定要写到onload的后边

## 参考资源

https://loading.io/ css3动画
https://preloaders.net/ 加载动画
http://ricostacruz.com/nprogress/ nprogress.js 