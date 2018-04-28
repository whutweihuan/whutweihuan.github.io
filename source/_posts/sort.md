---
title: 排序算法
tags: 算法
date: 2018-4-27 12:50
---

## 选择排序
```c
void sort (int a[],int n){
    int i,j,t;
    int term;
    for(i=0;i<n;i++){
        t =i;
        for(j=i+1;j<n;j++){
            if(a[j]<a[t]){
                t =j;
             }
         }
        term = a[i];
        a[i] = a[t];
        a[t] = term;
     }
}


```
