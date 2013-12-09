# Overview
----------
EasyAngluarJS是一个纯HTML5+JavaScript+CSS3的AngularJS的整体使用框架，你可以在WEB环境、手机客户端、PC客户端下使用。EasyAngular的目的就是为了Easy，让开发者更加容易地在AngularsJS的框架下快速开发，让入门者快速掌握AngualrJS+RequireJS的模块化编程技术。

## 1. 功能说明

* 提供更加简单的AngularJS的Controller、Route的配置管理和开发模式
* 提供jsonrpc的管理和开发模式。
* 提供常用的UI组件，并提供less自定义CSS样式。


## 2. 使用的第三方库的版本说明

* AngularJS 1.2.0
* RequiereJS 2.1.9
* Bootstrap 3.0
* JQuery 1.9.1
* JQueryUI 1.10.3
* JQGrid 4.5.4

## 3. 《使用AngularJS+RequireJS模块化编程教程》

* 为了大家更快速地掌握模块化编程知识。EasyAngularJS提供了一个完整的教程。教程地址是[https://github.com/nexustap/AngularJS/wiki/EasyAngularJS](https://github.com/nexustap/AngularJS/wiki/EasyAngularJS)
* 本教程属于[nexustap](https://github.com/nexustap)下的[AngluarJS](https://github.com/nexustap/AngularJS)教程子项目

# 安装说明
---------
## 1. 使用NodeJS运行

本项目采用了NodeJS作为系统运行的WEB环境，但也可以支持其他环境。如果需要在其他环境中，嵌入到你自己的工程。你可以参考下面一个章节安装。

### 下载并安装NodeJS 环境

下载地址:[http://nodejs.org/#download](http://nodejs.org/#download)

### 安装必须的环境

安装forever

```	bash
	npm install forever -g
```

### 启动Web Server

启动Web Server
```	bash
	forever start scripts/web-server.js
```

关闭Web Server

```	bash
	forever stop scripts/web-server.js
```

### 打开地址

[http://localhost:8081/demo/index.html](http://localhost:8081/demo/index.html)

## 2. 嵌入到你的工程内

以如下结构为例，需要建立两个目录，demo是应用程序的目录，EasyAngular是EasyAngular的目录。

```
/demo
	/config
		base.js
		controller.js
		datasource.js
	main.js
	index.html
/EasyAngularJS
```

### EasyAngularJS

拷贝复制EasyAngularJS目录到你的工程

### demo

在你的工程里面创建demo目录及子目录

### base.js

在config目录下，创建base.js，内容如下：


