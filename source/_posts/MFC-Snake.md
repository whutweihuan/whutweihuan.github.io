---
title: MFC贪吃蛇
date: 2018-6-13
tags: MFC
---
# 窗口大小
```c++
    //添加到OnInitDialog函数中去
    GetWindowRect(window);//
    GetClientRect(client);//
    int width = window.Width() - client.Width() + LENGTH * SIZE_H;
    int height = window.Height() - client.Height() + LENGTH * SIZE_H;
    MoveWindow(0, 0, width, height);

```

# 计时器
打开某个类类向导，添加消息,OnTimer编辑代码，写入按照计时器运行的内容
```c++
void CSnake2Dlg::OnTimer(UINT_PTR nIDEvent)
{
    switch (nIDEvent)
    {
        case 1:   //定时器1处理函数，定时发送数据进行更新
        {
            snakeMove();
        break;
        }

        case 2:   //定时器2位为状态栏时间信息
        {
	    snakeMove();
        break;
        }
    }

    CDialogEx::OnTimer(nIDEvent);
}




//开始1号计时器
SetTimer(1, 200, NULL);

//结束1号计时器
KillTimer(1);


```

# 按键控制
类向导->虚函数->pretranslate实现控制
```c++
BOOL CSnake2Dlg::PreTranslateMessage(MSG* pMsg)
{
   if (pMsg->message == WM_KEYDOWN)
      {
            switch (pMsg->wParam)
            {
            case VK_UP:
                  m_snake.dirctionChange(CPoint(0,-1));
                  break;
            case VK_DOWN:
                  m_snake.dirctionChange(CPoint(0, 1));
                  break;
            case VK_LEFT:
                  m_snake.dirctionChange(CPoint(-1, 0));

                  break;
            case VK_RIGHT:
                  m_snake.dirctionChange(CPoint(1, 0));

                  break;

            default:
                  break;
            }
      }

      return CDialogEx::PreTranslateMessage(pMsg);
}

```

# 链表
```c++
CList <CPoint> body;//链表类型
body.GetHead();//得到头节点
body.GetTail();//得到尾节点
body.GetHeadPosition();//返回位置

body.Add
POSITION p;//感觉有点向迭代器

//得到下一个节点
CPoint point =body.GetNext(p);
```



# 画矩形
```c++
	CClientDC dc(this);
	CBrush red(RGB(255, 0, 0));
	dc.SelectObject(red);
	dc.Rectangle(m_ptFood.x*LENGTH, m_ptFood.y*LENGTH, (m_ptFood.x + 1)*LENGTH, (m_ptFood.y + 1)*LENGTH);

```
# 画直线
```c++
	CClientDC dc(this);
	CPen pen;

	pen.CreatePen(PS_SOLID, 1, RGB(0, 0, 0));
	CPen *oldPen = dc.SelectObject(&pen);
	dc.MoveTo(0, 0);//起点
	dc.LineTo(0, 600);//终点
	dc.SelectObject(oldPen);

```
# OnPaint
什么时候调用？
1、由其他窗口遮挡、移动窗口等动作的时候系统会发送
2、你自己想更新某个区域可以发送Invalidate或InvalidRect，再加上UpdateWindow()也可以触发



# 设计思想
1、建立一个对话框
2、创建Point类型变量代表食物，并且作为对话框的成员变量
3、随机生成食物，绘制食物
4、建立蛇类，作为对话框类的成员
5、添加蛇类CList<CPoint>成员变量,以及代表方向CPoint成员变量
&emsp;&emsp;(CPoint类型的坐标含义为到下一方向作加法,(0,-1)代表纵坐标减1，即向上移动)
6、添加碰撞检测(比较两个点是否相同)
7、重绘蛇和食物

# 遇到的bug
1、消除边界
原因:消除蛇尾巴的时候清除
纠正方法:重画边界

2、蛇撞到自己的身体
原因:按键速度和蛇移动速度不匹配
纠正方法:当按下键的时候，键盘控制蛇移动，其他时候定时器控制

3、按键一直咚咚咚亮
改正方法:
```
return CDialogEx::PreTranslateMessage(pMsg);
```
换成
```
return false;
```


学习于:kekehui














