---
title: '理解view坐标系'
date: '2020-02-01'
---
# 1.什么是view坐标系
view坐标系就是**相机视角下的坐标系。**

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/85c529e75fd443d1ac00b4d9d3e4b615~tplv-k3u1fbpfcp-watermark.image)

**世界坐标系下的相机👆**

在view坐标系里，相机位置即原点位置。view坐标系下所有物体的坐标都是相对于相机位置的坐标。并且相机的朝向始终是view坐标系的-z方向（针对openGL的右手坐标系而言，Direct3D 为左手坐标系，相机的朝向与z轴一致）,即**与上图中蓝色箭头相反的方向**。



# 2.视图变换

**实质**：乘一个变换矩阵，让世界坐标系下的所有顶点的坐标变换到view坐标系下的坐标

## 2.1 视图变换矩阵的推导

首先需定义：
1. 相机的在世界坐标系下的位置坐标向量，假设其为**P**
2. 相机的朝向（观察的方向）假设它为向量**G**，相当于相机坐标系的z轴**负方向**，假设向量**D=-G**指向z轴正方向
3. 一个右向量**R**，代表view坐标系下的**x轴的正方向**
4. 一个指向view坐标系下**正y轴方向**的向量**U**

视图变换先将相机移动至（0，0，0）的位置，对应的齐次坐标系下的位移变换为：

![](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/6c3c31b2a0cf4a00a133066b3f7ceffe~tplv-k3u1fbpfcp-watermark.image)

接着开始旋转坐标系：XYZ→RUD

如果你使用3个**相互垂直**（或非线性）的轴定义了一个坐标空间，你可以用这3个轴的方向向量构成一个如下图所示的矩阵，该矩阵实现了XYZ→RUD的变换：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/494a218a8bf2471b93814e86eed90e70~tplv-k3u1fbpfcp-watermark.image)

因此视图变换矩阵的推导公式可以写作：

![](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c00d4238ffa14a72859dbc446151e5e6~tplv-k3u1fbpfcp-watermark.image)

❗❗**矩阵变换的叠加顺序：公式从右往左顺序**

实际在OPENGL中使用视图变换矩阵，只需要调用glm::lookat()函数。

使用者只需要定义一个摄像机位置，一个目标位置和一个世界坐标系中的上向量（用于推导右向量**R**方向），即可获得观察矩阵。


``` cpp
glm::mat4 view;
view = glm::lookAt(glm::vec3(0.0f, 0.0f, 3.0f), //摄像机位置
           glm::vec3(0.0f, 0.0f, 0.0f), //目标位置,假设相机看向原点
           glm::vec3(0.0f, 1.0f, 0.0f));//世界坐标系中的上向量
```