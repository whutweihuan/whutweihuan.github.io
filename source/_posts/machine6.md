---
title: python处理excel
tags: 机器学习
---
```python
import xlrd

data = xlrd.open_workbook('2017下学期成绩1.xlsx'); #打开excel文件
table = data.sheets()[0];                 #获取工作表方式1
table = data.sheets_by_index(0);          #获取工作表方式2
table = data.sheet_by_name(u'Sheet1');    #获取工作表方式3

ncols = table.cols    #获取列数
nrows = table.nrows   #获取行数
#for i in range(nrows):        #输出所有内容
    #print(table.row_values(B))

cell_A = table.cell(2,2).value      #获取单元格值方式1
cell_B = table.row(0)[0].value
cell_ = table.col(0)[0].value
col = table2.col_values(10,1)  #第十列，第二个开始
print(cell_A)

row = 0
col = 0
ctype = 1 # 类型 0 empty,1 string, 2 number, 3 date, 4 boolean, 5 error
value = 'liluo'
xf = 0 # 扩展的格式化 (默认是0)
table.put_cell(row, col, ctype, value, xf)  #写入数据
```