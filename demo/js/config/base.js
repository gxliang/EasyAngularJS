
/*
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-11-07
 * Version: $Revision$
 */

'use strict';

define([
	'./controllers'
	],function(controllers){

	return {
		baseUrl : "js",					//当前工程js代码路径
		easyangularUrl : "../../easyangular",	//easyangular路径
		appName : "演示教程 0.1",				//当前工程的名称
		
		paths : {						//设置路径
			jsonrpc			: "config/datasource",						//jsonrpc地址
		},

		config : {
			routes : [					//路由配置
				{url: '/home', config:{templateUrl: 'views/home/tabs.html', controller: 'tabsCtrl'}},
				{url: '/tabs', config:{templateUrl: 'views/home/tabs.html', controller: 'tabsCtrl'}},
				{url: '/tabs/frame', config:{templateUrl: 'views/home/tabs.html', controller: 'tabsCtrl'}},
				{redirectTo: '/home'}
			],

			controllers : controllers,	//controller配置			
		}

	}
});