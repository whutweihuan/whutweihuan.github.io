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
---
## 快速排序
```c

#include<stdlib.h>
#include<stdio.h>

int cmp(const void *a,const void *b){
	return (*(int *)a-*(int *)b);

}

int main(){
	int i=0;
	int a[]={4,3,2,1};
	qsort(a,4,sizeof(a[0]),cmp);
	for(i=0;i<4;i++){
		printf("%d",a[i]);
	}

}


```
---
## 冒泡排序
```py
def maosort(a):
    n=len(a)
    for i in range(0,n):
        for j in range(0,n-i-1):
            if a[j]>a[j+1]:
                a[j],a[j+1]=a[j+1],a[j]
```

















