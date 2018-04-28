---
title: 牛顿插值
tags: 数值分析
date: 2018-4-27
---
```c

#include<stdio.h>
#define MAX 50

void input(double x[MAX],double f[MAX][MAX],int n);

int main(){

    double x[MAX],f[MAX][MAX],_x,_y;
    long i,j;
    int n;
    printf("请输入插值点个数:");
    scanf("%d",&n);
    input(x,f,n);
    printf("\n请输入插值点:");
    scanf("%lf",&_x);
    for(j=1;j<=n-1;j++){
        for(i=j;i<=n-1;i++){
            f[i][j] = (f[i][j-1]-f[i-1][j-1])/(x[i]-x[i-j]);

        }
        _y = f[n-1][n-1];
    }
     for(i=n-2;i>=0;i--){
          _y = f[i][i]+(_x-x[i])*_y;
      }
      printf("\n插值点(x,y)=(%lf,%lf )",_x,_y);
    return 0;

}

void input(double x[MAX],double f[MAX][MAX],int n)
{
    int i;
    for(i=0;i<=n-1;i++){
        printf("\n请输入插点x[%d],y[%d]:",i,i);
        scanf("%lf%lf",&x[i],&f[i][0]);
    }

}




```
