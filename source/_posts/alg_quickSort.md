---
title: 快速排序
date: 2018-6-13
tags: 算法
---
```matlab
function quickSort
a = [2,0,1,8,6,13];
num=size(a,2);
c = quickSort1(a,1,num);
disp(c);
end

function a=quickSort1(a,aStart,aEnd)
if aStart >= aEnd
    return ;
end
index = a(aStart);
i = aStart,j = aEnd;
while i<j
    while a(j)>=index && i<j
        j=j-1;
    end
    a(i)= a(j);
    while a(i)<=index && i<j
        i=i+1;
    end
    a(j)= a(i);
end 
a(i) = index;
a=quickSort1(a,aStart,i-1);
a=quickSort1(a,i+1,aEnd);

end
```

感觉更为简洁
```c
#include<stdio.h>

void swap(int *a, int *b)
{
    int t = *a;
    *a = *b;
    *b = t;
}

void quickSort(int a[], int aStart, int aEnd)
{
    if (aStart >= aEnd)
    {
        return;
    }
    int midvalue = a[aEnd];
    int i = aStart - 1;
    for (int j = aStart; j <= aEnd-1; j++)
    {
        if (a[j] <= midvalue)
        {
            i++;
            swap(&a[j],&a[i]);
        }
    }
    swap(&a[i+1], &a[aEnd]);

    quickSort(a, aStart, i + 1 - 1);
    quickSort(a, i + 1 + 1, aEnd);
}

void printArray(int a[], int n)
{
    for (int i = 0; i < n; i++)
    {
        printf("%d\t", a[i]);
    }
    printf("\n");
}

int main()
{
    int a[] = { 1,4,3,2 };
    int n = sizeof(a) / sizeof(a[0]);
    printArray(a, n);
    quickSort(a, 0, n - 1);
    printArray(a, n);

}
```

