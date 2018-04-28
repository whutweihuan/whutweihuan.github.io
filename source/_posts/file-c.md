---
title: 文件(I/O)
tags:
date: 2018-4-27
---
## c语言
```c
#include<stdio.h>
#include<stdlib.h>
#define  MAXSIZE 100


int main(){
    FILE *fp1=fopen("input.txt","r");
    FILE *fp2=fopen("output.txt","w");

    if(fp1==NULL||fp2==NULL){
        printf("打开文件失败！");
    }
    int a[MAXSIZE];
    int b[MAXSIZE];
    int i=0;
    int n=0;
    fscanf(fp1,"%d",&n);
    i=0;
    while(i<n&&fscanf(fp1,"%d",&a[i])!=EOF){
        i++;
    }
    i=0;
    while(i<n&&fscanf(fp1,"%d",&b[i])!=EOF&&i<n){
        i++;
    }
    int k;
    k = fun(a,b,n);

    fprintf(fp2,"%d",k);  
    fclose(fp1);
    fclose(fp2);

    return 0;
}
```
---
input.txt

3
5 15 18
3 14 21
















