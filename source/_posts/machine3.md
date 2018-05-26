---
title: 机器学习3
tags: python 机器学习
date: 2018-01-31 0:37:00
---
# 小疑问
## 1、 Expected n_neighbors <= n_samples,  but n_samples = 4, n_neighbors = 5  ？
   ```python
    knn =KNeighborsClassifier(n_neighbors = 2)
   ```
    明确指出分成2类，估计默认为5类


## 2、excel大空格字体排左下？
    底端对齐，左对齐


## 3、TypeError: train() takes from 0 to 2 positional arguments but 3 were given
 ```python
    def train(datasetX=[],k=1):
    def train(self, datasetX = [], k=1):
 ```
    需加入self参数

## 4、代码高亮？区块暗？
     三点对齐行首。文字部分小方块。
