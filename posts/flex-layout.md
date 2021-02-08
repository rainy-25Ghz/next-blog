---
title: '理解Flex布局'
date: '2020-01-02'
---

本篇主要是对
https://css-tricks.com/snippets/css/a-guide-to-flexbox/
的翻译，并加以自己的理解。

# 1 flex 布局的用途

让容器能够自行调整 item 的宽高，来填充可用空间，适应不同的显示设备与屏幕大小。一个弹性容器可以扩展 item 适应空间也可以收缩 item 防止溢出。

与常规布局（inline 与 block）相比，flex 布局与方向无关。虽然 block 与 inline 在页面上工作得很好，但它们缺乏支持大型或复杂应用程序的灵活性(特别是在改变方向、调整大小、拉伸、收缩等方面)。

Flex 布局最适合应用程序的组件和小规模布局，而网格布局则适合较大规模的布局。

# 2 基本概念与术语

- 容器（父元素）：container
- 子元素：flex item
  flex 布局方向基于 flex-flow directions

![](https://user-gold-cdn.xitu.io/2020/7/3/173136c8489b09bb?w=866&h=457&f=png&s=54502)
items 要么沿着主轴（main axis）从 main-start 到 main-end 的方向，要么沿着侧轴（cross axis），从 cross-start 到 cross-end。
**注意，main-axis 不一定是水平的,cross-axis 也不一定是竖直的， 它取决于 flex-direction 属性**

- main size：item 在主轴方向上的长度
- cross szie：item 在侧轴方向上的长度

# 3 容器的属性

## 3.1 diaplay

使用 flex 布局，需设置容器的 display 属性为 flex。

```css
.container {
  display: flex; /* or inline-flex */
}
```

## 3.2 flex-direction

定义了主轴的方向

```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

几种不同的取值（当容器的 dir 属性为 ltr 从左至右时）：

- row(flex-direction 默认值):
  ![](https://user-gold-cdn.xitu.io/2020/7/3/17313a8c22e0bd26?w=405&h=266&f=png&s=7186)
- row-reverse:
  ![](https://user-gold-cdn.xitu.io/2020/7/3/17313a9d6143f0c1?w=380&h=219&f=png&s=6000)
- column:
  ![](https://user-gold-cdn.xitu.io/2020/7/3/17313aa81649bf34?w=390&h=367&f=png&s=10959)
- column-reverse:
  ![](https://user-gold-cdn.xitu.io/2020/7/3/17313b0b3f7c2836?w=375&h=356&f=png&s=9072)

## 3.3 flex-wrap

默认情况所有 flex item 都会挤到一行里，修改 flex-wrap 便能改变这种规则。

```css
.container {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

- nowrap(默认值)：所有 items 挤在一行
  ![](https://user-gold-cdn.xitu.io/2020/7/3/17313bfcfa75d20f?w=401&h=280&f=png&s=9023)
- wrap：沿着 top 到 bottom 的方向分成多行

![](https://user-gold-cdn.xitu.io/2020/7/3/17313c0355fff4a6?w=343&h=292&f=png&s=8920)

- wrap-reverse：沿着 bottom 到 top 方向分成多行
  ![](https://user-gold-cdn.xitu.io/2020/7/3/17313c13e1cf4241?w=437&h=436&f=png&s=15694)

## 3.4 flex-flow

同时定义 flex-direction flex-wrap，

```css
.container {
  flex-flow: column wrap;
}
```

## 3.5 justify-content 对齐方式

用于定义沿着主轴方向的对齐方式

```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around
    | space-evenly | start | end | left | right... + safe | unsafe;
}
```

flex-start 为其默认值
效果：
![](https://user-gold-cdn.xitu.io/2020/7/3/17313d19a3dd9803?w=410&h=679&f=png&s=87258)
**注意 ❗❗❗：不同浏览器对 justify-content 的支持有差异，因此推荐只取 flex-start，flex-end 以及 center 三个值**

## 3.6 align-items

定义了 item 在横轴上的默认行为。
默认值 flex-start
效果：
![](https://user-gold-cdn.xitu.io/2020/7/3/17313dbc2e64bc1b?w=381&h=473&f=png&s=78152)

## 3.7 align-content

用于控制横轴方向上的 items 间的对齐方式

- flex-start
  ![](https://user-gold-cdn.xitu.io/2020/7/3/17313ecf4c51cf35?w=258&h=335&f=png&s=5673)
- center
  ![](https://user-gold-cdn.xitu.io/2020/7/3/17313f10380f8042?w=282&h=302&f=png&s=5585)
- space-between，特点是每行的间距相等，顶部底部空间被挤压
  ![](https://user-gold-cdn.xitu.io/2020/7/3/17313f3491457479?w=179&h=177&f=png&s=14374)
- space-around，顶部至第一行距离\*2=行间距
  ![](https://user-gold-cdn.xitu.io/2020/7/3/17313f4c4986fb29?w=189&h=163&f=png&s=14021)

# 4 flex item 的属性

## 4.1 order

决定各个 item 的排列顺序

![](https://user-gold-cdn.xitu.io/2020/7/3/17314022219955e4?w=375&h=344&f=png&s=46453)

## 4.2 flex-grow

这定义了 item 在必要时增长的能力。 它接受作为比例的无单位值。 它决定了 items 应在容器内部占用多少**剩余的可用空间**。(flex-shrink 决定了 item 在必要时收缩的能力)

![](https://user-gold-cdn.xitu.io/2020/7/3/17314049a9c25baf?w=383&h=193&f=png&s=26283)
举一个例子，如下图所示，可以计算得到主轴方向剩余空间为 200-70\*2=60px，那么按照 1：2 的比例分给两个 div，可得宽度：div1=50+20=70px，div2=50+40=90px.

![](https://user-gold-cdn.xitu.io/2020/7/3/173141c423948b52?w=610&h=422&f=png&s=14722)

## 4.3 flex-basis

它允许您在计算其他任何内容之前指定元素的初始/开始大小。 它可以是百分比或绝对值。
下图是 flex-basis 与 width 的对比：

![](https://user-gold-cdn.xitu.io/2020/7/3/173142941ce89735?w=690&h=500&f=png&s=51910)

- 首先方向不一定与 width 一致（flex-direction=column 的情况）
- 其次 flex-basis 对绝对定位的 flex items 无效。

**注意 ❗❗❗❗❗❗:如果同时为元素设置了 flex-basis（非 auto）和 width（或 flex-direction：column 时的高度），则 flex-basis 具有优先权。**
