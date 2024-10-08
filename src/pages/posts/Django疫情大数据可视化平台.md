---
layout: '@/templates/BasePost.astro'
title: Django疫情大数据可视化平台【附源码和最详细运行教程】
description: Django+Echarts+MySQL
pubDate: 2023-07-21T18:01:00Z
imgSrc: 'https://gitee.com/Heng-Xiao/covid-19-django/raw/master/static/img/3.jpg'
imgAlt: 'Image Index'
---

<meta name="referrer" content="no-referrer" />



## 💡 **「关于」**

花有重开日，人无再少年。

大家好，我是蛋蛋小菜鸟，平时没事就喜欢瞎写，此系统于2022年所写， **目前已开源，可免费学习使用，若分享请注明出处，谢谢。**

座右铭：业精于勤，荒于嬉；行成于思，毁于随。

因为热爱，所以拥抱未来。

好事总会发生在下个转弯，祝大家愿望都一一实现！！

 **走过路过，麻烦各位看官老爷给个Star以及关注一下本人公众号！小的在这谢谢大家！！**

## 平台简介

[COVID-19-Django](https://gitee.com/Heng-Xiao/covid-19-django) 国内疫情大数据可视化平台主要是为了更直观地实时关注和掌握新型冠状病毒感染的肺炎疫情防控进展，也更直观地了解全国的疫情情况，及时有效做出防控措施，在数据可视化技术的解决下，数据信息所面向的不仅是决策者，也能向大众进行授权展示，我们可以通过大数据可视化，可以更清楚、更直观地了解到目前疫情全国各地的感染人数，以此了解疫情的变化的趋势。

本系统采用Django架构开发web应用，使用Echarts绘制基本图表，利用Python语言中的requests库从一些新闻网站上爬取疫情数据下来清洗然后存储在MySQL中，实现了永久保存数据，以及实时更新数据，不仅方便，而且还能保证数据的安全性。

💡 [COVID-19-Django](https://gitee.com/Heng-Xiao/covid-19-django) 基于Django的国内疫情可视化平台， **目前已开源，可免费学习使用，若分享转载请注明出处，谢谢。**



* 🧑‍🤝‍🧑前端采用[Echarts](https://echarts.apache.org/zh/index.html) 、[Jquery](https://jquery.com/)、Ajax、HTML、CSS、。
* 💡后端采用 Python 语言 [Django](https://www.djangoproject.com/) 框架。


## 源码地址

gitee地址(主推)：[https://gitee.com/Heng-Xiao/covid-19-django](https://gitee.com/Heng-Xiao/covid-19-django)👩‍👦‍👦

github地址：[https://github.com/Heng-Xiao/covid-19-django](https://github.com/Heng-Xiao/covid-19-django)👩‍👦‍👦



## 内置功能

1.  👨‍⚕️用户登录：用户登录和注册功能。
2.  👩‍⚕️数据爬取：数据爬取脚本GetData.py和SaveMysqlData.py，直接将疫情数据爬取到MySQL数据库中。
3.   :grapes: 数据更新：数据重新爬取并且更新数据。
4.  👨‍🎓疫情可视化大屏：从MySQL数据库将数据取出并且整理将其用来做数据可视化。



## 详细结构

```
- covids19 项目名字
    - connect.py 数据库配置相关
    - GetData.py Python数据爬虫相关
    - indexdata.py 数据封装相关
    - SaveMysqlData.py 将爬取的数据保存到MySQL数据库
    - settings.py 很重要，整个项目的启动，由配置文件决定
    - urls.py 路由（总路由）
    - views.py 视图函数（重点）
    - wsgi.py wsgi服务器的配置
- static 静态资源存放路径
- templates 模板文件（一个一个的html），pycharm创建出来才有这个文件夹
- venv 项目虚拟环境管理
- covid-19.sql 数据库里面的数据表
- manage.py 启动项目，创建app，各种命令的操作
- requirements.txt 项目运行需要的依赖
```



## 准备工作
~~~
Python >= 3.8.0 (推荐3.8+版本)
Mysql >= 5.7.0 (可选，默认数据库sqlite3，推荐8.0版本)
PyCharm >= 2021
操作系统 (推荐Windows10版本)
~~~

## 运行准备♝

```bash
--1.在MySQL数据库中新建数据库covid-19

--2.将covid-19.sql文件中的数据导入到数据库中

--3.安装依赖环境
pip install -r requirements.txt

--4.更换数据库密码
--进入connect.py和settings.py文件修改下

--connect.py
conn = Connect(user="root",
                   password="000000",
                   host="127.0.0.1",
                   database="covid-19",
                   port=3306,
                   charset="utf8", )
--settings.py
DATABASES = {
    'default':
    {
        'ENGINE': 'django.db.backends.mysql',    # 数据库引擎
        'NAME': 'covid-19', # 数据库名称
        'HOST': '127.0.0.1', # 数据库地址，本机 ip 地址 127.0.0.1
        'PORT': 3306, # 端口
        'USER': 'root',  # 数据库用户名
        'PASSWORD': '000000', # 数据库密码
    }
}

--5.启动项目
python3 manage.py runserver 0.0.0.0:8000
```


### 访问项目

- 访问地址：[http://localhost:8000](http://localhost:8000) (默认为此地址，如有修改请按照配置文件)
- 账号：`admin` 密码：`admin`



## 演示图✅

![image.png](https://gitee.com/Heng-Xiao/covid-19-django/raw/master/static/img/1.png)

![image.png](https://gitee.com/Heng-Xiao/covid-19-django/raw/master/static/img/2.png)

![image.png](https://gitee.com/Heng-Xiao/covid-19-django/raw/master/static/img/3.jpg)

![image.png](https://gitee.com/Heng-Xiao/covid-19-django/raw/master/static/img/4.jpg)

![image.png](https://gitee.com/Heng-Xiao/covid-19-django/raw/master/static/img/5.jpg)

![image.png](https://gitee.com/Heng-Xiao/covid-19-django/raw/master/static/img/6.jpg)

![image.png](https://gitee.com/Heng-Xiao/covid-19-django/raw/master/static/img/7.jpg)

![image.png](https://gitee.com/Heng-Xiao/covid-19-django/raw/master/static/img/8.jpg)

![image.png](https://gitee.com/Heng-Xiao/covid-19-django/raw/master/static/img/9.jpg)



## 后续打算

1.  👨‍⚕️疫情数据后台管理：用来管理疫情数据信息以及爬虫脚本信息。
2.  👩‍⚕️加入Redis技术：优化可视化大屏查询数据时间。
3.  👨‍🎓增加kafka技术：将爬取到的数据写入kafka之后，再去消费数据，无论是将数据清洗之后存入数据库中或者是将数据拿出来进行一些监测。

目前由于本人的时间有限并且新冠疫情已经开放解封了导致数据不再更新维护。这些打算就不再做了，大家要是有兴趣的话可以自己做一下试试看。
