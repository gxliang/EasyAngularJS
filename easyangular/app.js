
/* 定义应用，全局系统配置。
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-27
 * Version: $Revision$
 */

'use strict';

define([
	'module',
	'angular',
	'angularCookies',
	'angularRoute',
	// 'angularBootstrap',
	'ui.easyangular',
	'./controllers',
	'./filters',
	'./services',
],function (module) {

	var appName = module.config().appName;

	return angular.module(appName, [
		'ngRoute',
		'ngCookies',		//加入angular cookie
		// 'ui.bootstrap',		//加入angular ui bootstrap
		'filters',			//全局过滤器配置或定义
		'services',			//全局服务配置或定义
		'ui.easyangular',		//全局UI配置
		'controllers',		//全局controllers配置或定义
	]);

});