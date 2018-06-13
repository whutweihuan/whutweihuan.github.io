---
title: 批量更改图片大小
tags: python
date: 2018-6-9
---
```py
from PIL import Image

img = Image.open("cat.bmp")
new_img = img.resize((40,40))
new_img.save("cat.bmp", "BMP", optimize=True)
```
