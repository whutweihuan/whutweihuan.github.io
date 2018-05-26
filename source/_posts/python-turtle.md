---
title: Python-turtle
tags: python
date: 2018-5-11
---

```python
import turtle as t

t.setup(width,height,startx,starty)

t.goto(x,y)
t.fd(100)  #前进
t.bk(100)  #后退

t.circle(R,180)           #半径，左边角度
t.seth(180)

t.colormode()
t.pu()      #抬起画笔
t.pd()     #放下画笔
t.opensize(7)
t.pencolor('red')
t.ht()       #隐藏
t.st()       #显示

t.trace(False)  #轨迹
t.setup()
t.clear()

t.rt(144)   #右转
t.lt(144)   #左转

t.begin_fill()
t.end_fill()

```
