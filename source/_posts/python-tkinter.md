---
title: python-tkinter
date: 2018-5-11
tags: python
---
```python
import tkinter as tk     #引入包
win = tk.Tk()
win.geometry('200x200')   #大小
var = tk.StringVar()      #tk字符串
text = tk.Text()          #文本框
text.insert('insert',var)

lb = tk.Listbx(win,lisvariable=var)
tk.Scale()  #横条
tk.CheckButton()

canvas = tk.Canvas(win,bg='blue',height=100,width=200)
bt = tk.Button(win,text='move',command=move) #command指向的是一个函数
bt.pack()   #布置到窗口上去

image_file = tk.PhotoImage(file='abc.gif')
image = canvas.create_image(0,0,anchor='nw',image=image_file)   #將锚点定在左上角0，0处
line = canvas.create_line(x0,y0,x1,y1)
canvas.move(rect,0,2)  #rect 为移动的对象

menubar = tk.MenuBar(win)
filemenu = tk.Menu(menubar,tearoff=0)
menubar.add_cascade(label='File',menu=filemenu)
filemenu.add_commond(label='new',commond=do_job)
filemenu.add_separator()  #分隔线
win.congfig(menu=menubar)

.pack()
.place(x=10,y=100,anchor='nw')
.grid(row=i,col=j,padx,pad,y)


tk.MessageBox.showInfo(title='hi',message='HaHa')


```
