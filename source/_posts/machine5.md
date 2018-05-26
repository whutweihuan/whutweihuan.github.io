---
title: SVM
tags: 机器学习
date: 2018-4-03
---
SVM
1、分类
```python
from sklearn import svm

 X = [[0, 0], [1, 1], [1, 0]]  # training samples
y = [0, 1, 1]  # training target
clf = svm.SVC()  # class
clf.fit(X, y)  # training the svc model

result = clf.predict([2, 2]) # predict the target of testing samples
print result  # target

print clf.support_vectors_  #support vectors

print clf.support_  # indeices of support vectors

print clf.n_support_  # number of support vectors for each class
```

2、回归
```python
X = [[0, 0], [1, 1]]
y = [0.5, 1.5]
clf = svm.SVR()
clf.fit(X, y)
result = clf.predict([2, 2])
print result
```
