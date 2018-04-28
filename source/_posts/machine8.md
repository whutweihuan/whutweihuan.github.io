---
title: Matplotlib
tags: 机器学习
---

```python
import matplotlib.pyplot as plt

x=[]
for i in range(len(math_score)):
    x.append(i)

plt.plot(x,math_score,label='math',color='r')
plt.plot(x,physical_score,label='physic',color='b')
plt.plot(x,chemistry_score,label='chemistry',color='g')
plt.legend()
plt.show()
```