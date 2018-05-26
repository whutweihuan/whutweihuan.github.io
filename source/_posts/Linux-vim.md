---
title: Linux-vim
date: 2018-5-11
tags: Linux
---
最近看了一本书《vim实战技巧》，感觉讲的比较好，做了些笔记
对于HJKL移位，手指最好保持在本位上，这一点建议很不错，以前见到一些教程叫我左移一格，真是妖言惑众
另外不断切换中英文形态在vim中操作好难受，fcitx词库可真小。
```
.  重复上一次操作 
w  跳到下一个单词开头
e  跳到单词末尾
b  跳到上一个单词开头

fs ; , 跳到该行s字符位置

ce    替换当前单词和一个空格
cw    替换当前单词和一个空格
%s/a/c/gc  全局替换，將所有a换成c，并且会提示是否换

<C-a>  <C-x> 对该行数字进行增加和减少   10<C-a> 会对当前数字增加10

gg=G  全局缩进

daw  删除光标所在单词和一个空格
diw  删除光标所在单词
dap  删除光标所在段落
gUap 將光标所在单词段落全部变为大写
/search 正向查找单词
?search 反向查找单词


need bundle:https://github.com/kana/vim-textobj-entire
gcc 注释该行
gcap 注释该段落
gcG 注释到结尾


<C-o>zz  將光标所在处居中

<C-v> 列选择
<S-v> 行选择
v    字符选择

:%normalA; 在每行后面都加入;

:bn  切换下一个文件
:bp  切换到上一个文件

w | !gcc % -o a && ./a  编译执行


:1,3 co $  將1到3行赋值到行尾
:1,3 m $   將1到三行移动到行尾

mm  设置标志方便跳回
`m  跳回标志

lilydjwg/fcitx.vim bundle will work if you feel unease to swich to Chinese. 

```
