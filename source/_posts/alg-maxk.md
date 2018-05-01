---
title: 最大k相乘
tags：算法
date: 2018-5-1
---

```cpp

// 问题：最大k相乘
// 將一个整数分为k段，每段相乘，求最大的结果
// 采用动态规划来完成：
// m[i][k]:表示从第一个到第i个插入k个符号的最大结果
// p[i] 表示值
// m[i][k] = m[j][k-1] * p[j+1:i]

#include<stdio.h>
#include<stdlib.h>
#include<iostream>
using namespace std;


int toInt(char a[],int start,int end){
	char b[10]="";               //这里开始没有初始化，出现了一点问题
	for(int i=start;i<end;i++){
		b[i-start]=a[i];
	}
	return(atoi(b));
}

int fun(int l,int k,char p[]){
	int m [l][k];
	int term=0;
	for(int i=0;i<l;i++){
		m[i][0] = toInt(p,0,i+1);		
	}

	for(int i=0;i<l;i++){
		for(int j=1;j<k;j++){
			int max =0;
			for(int d=0;d<i;d++){               //找到合适的地方插入
				term = m[d][j-1] * toInt(p,d+1,i+1);
				if (term >max){
					max =term;
				}
			}
			m[i][j]=max;
		}	
	}

	return m[l-1][k-1];
}


int main(){
	FILE * fp =fopen("./maxk_input.txt","r");
	int l,k;
    char p[15];
	fscanf(fp,"%d%d%s",&l,&k,p);
	printf("%d\n",fun(l,k,p));
}

```

