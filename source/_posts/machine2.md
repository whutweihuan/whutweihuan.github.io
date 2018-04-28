---
title: 机器学习2
date: 2018-1-30  23:58
tags: python 机器学习
---
# 小疑问
## 1、DataPreProcessing有什么用？
    目前不需要用，为以后用

## 2、kmeans要分析什么？哪些数据是输入哪些数据是输出？
    聚类分析，自己定义参数

## 3、main函数怎么来写？
    目前只需要写类

## 4、y_pre = KMeans(n_clusters=3,random_state = random_state)什么意思？random_state?

## 5、from sklearn.externals import joblib   ?

## 6、(n_clusters=9）？
    9类

## 7、with open('cc_kmean.pkl','wb') as f:  ？
   ```python
     try:
        f = open('/path/to/file', 'r')
        print(f.read())
     finally:
        if f:
          f.close()
   ```
    这和前面的try ... finally是一样的，但是代码更佳简洁，并且不必调用f.close()方法。

## 8、iris？
    数据集

## 9、iris = datasets.load_iris() ？？
    python自带的数据集

## 10、python main函数怎么写？
   ```python
     if __name__=="__main__":
      print 'main'
   ```

## 11、python类如何使用？
   ```python
      k_means = K_means()
   ```
## 12、takes 2 positional arguments but 3 were given


## 13、[:,:-1]??


## 14、x = np.random.rand(3,2)？？



## 15、需要知道这些算法是怎么实现的
      knn,kmens,adbost,贝叶斯算法，c4.5,cart


## 16、datasets
   ```python
    from sklearn import datasets
    iris = datasets.load_iris()
    data = iris.data
    data.shape
   ```

## 17、cmd清屏
   ```
    cls
   ```

## 8、np.unique(iris_Y) ???


## 19、np.random.seed(0)


## 20、TypeError: list indices must be integers or slices, not tuple
    indice 指数    tuple 元组
   ```python
    iris_X_test=[
          [1, 1, 1, 1, 0, 0],
          [0, 0, 0, 0, 1, 1]
    ]
   ```
    这玩意儿之间少了逗号就会报这种错误











