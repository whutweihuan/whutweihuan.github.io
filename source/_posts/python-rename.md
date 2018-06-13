---
title: 文件重命名
date: 2018-6-5
tags: python
---
多个文件重命名
```py
import os
i=1
for file in os.listdir("."):
    os.rename(file,"img"+str(i)+".bmp")
	i=i+1

```
PS: windows 防火墙会阻止脚本文件更改文件名，所以要关闭