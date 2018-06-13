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