---
title: Pandas
tags: 机器学习
date: 2018-4-4
---
相关性分析：
```python
s1 = pd.Series(math_score) #转为series类型
s2 = pd.Series(physical_score)
corr = s1.corr(s2) #计算相关系数
print (corr)
```

