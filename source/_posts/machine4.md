---
title: 机器学习4
tags: python 机器学习
date: 2018-2-3 20:00
---
# 小疑问
## 1、excel单元格换行？
    alt+enter

## 2、层次聚类？
   ```python
    from sklearn.cluster import AgglomerativeClustering
    model = AgglomerativeClustering(n_clusters=n_clusters,affinity="precomputed", linkage='average')
    labels = model.fit_predict(dist_matrix)
   ```

## 2、IndexError: index 2 is out of bounds for axis 1 with size 2
   ```python
     clf = AgglomerativeClustering(n_clusters=n_clusters, affinity="precomputed", linkage='average')
   ```
     内部参数删去第一个后面的就可以了

## 3、层次聚类
   层次聚类算法：
   1、将每个对象归为一类, 共得到N类, 每类仅包含一个对象. 类与类之间的距离就是它们所包含的对象之间的距离.
   2、找到最接近的两个类并合并成一类, 于是总的类数少了一个.
   3、重新计算新的类与所有旧类之间的距离.
   4、重复第2步和第3步, 直到最后合并成一个类为止(此类包含了N个对象).
   由于层次聚类计算量巨大，所以通常不用来计算大量的数据，不过可以用层次聚类来选取K-means算法的初始类中心。

## 4、io.UnsupportedOperation: read？connection time out
   ```python
        with open("k_means.pkl","rb")  as file:  #从文件读取分类器
            clf = pickle.load(file)
    ```
    这里的rb，wb不要搞混

## 5、Singleton array array(2) cannot be considered a valid collection？
    查看输入参数是否有问题


## 6、putty network error：connection time out？
    重启主机，之后进入远程主机重新开启服务

## 7、tags404？
   ```
    hexo new page "tags"
   ```
    文件管理进入source文件夹
    将类型修改为  type: tags

# vps常用命令
  ```
    ssserver -c /etc/shadowsocks.json -d start  启动ssh
    vi /etc/shadowsocks.json         i进入编辑，可修改密码
    service serverSpeeder start                启动锐速
    service serverSpeeder status
    service serverSpeeder restart
  ```







