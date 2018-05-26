---
title: Linux 安装
tags: Linux
date: 2018-4-16
---
# 制作启动盘
    UItraISO软件将iso镜像文件刻入进u盘
# 磁盘分区
    win + x ,进入磁盘管理，将某个盘转化为未分配
# secureboot
    进入bios，将secure转化为Disable

# nomodeset
    对于7559电脑来说，还需要在install ubuntu按e键,将倒数第二行的Quick ... -- 改为nomodeset
# 设置分区
   *| 分区 |大小
   - |:-:|-:
   / | 主分区|15,000MB
   /boot|逻辑分区|300MB
   / swap(交换空间)|逻辑分区|2,0000MB
   /home| 逻辑分区|100,000MB
