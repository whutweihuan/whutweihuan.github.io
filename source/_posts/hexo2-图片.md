---
title: hexo2-图片
tags: hexo搭建
---
安装插件：
```
npm install hexo-asset-image --save
```

修改hexo _config.yml为：
```
post_asset_folder: true
```
之后，运行hexo n "xxxx"，会产生一个xxxx.md，同时还会产生一个xxxx文件夹，把图片放入xxxx文件夹内。
markdown调用图片：
```
![可不填，图片代替的文字](xxxx/image.png)
```
注意gitpages是区分大小写的,image.png与image.PNG 是不同的！
但是在localhost:4000内不区分大小写，有点意思。