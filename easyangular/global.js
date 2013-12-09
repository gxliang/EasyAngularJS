
/* frame启动文件
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-27
 * Version: $Revision$
 */

'use strict';

define([
	'./utils/tools',
	'./config/framework'
],function(tools, frameworkConfig){

	var baseConfig = {}

	function setFrameworkConfig(value) {
		baseConfig = value
	}

	//参数获取并校验
	function setAppConfig(value) {

		// baseUrl合并
		baseConfig.baseUrl = tools.getSubsFromObj(value, "baseUrl");

		// appName
		baseConfig.appName = tools.getSubsFromObj(value, "appName");

		//获取EasyAngularJS的路径
		var easyangularUrl = tools.getSubsFromObj(value, "easyangularUrl");

		//path合并
		var paths = tools.getSubsFromObj(value, "paths");
		tools.getSubsFromObj(paths, "jsonrpc");
		for(var k in baseConfig.paths) {
			baseConfig.paths[k] = easyangularUrl + "/" + baseConfig.paths[k];
		};
		baseConfig.paths['easyangular'] = easyangularUrl;
		baseConfig.paths = tools.concatObj(baseConfig.paths, paths)

		//packages合并
		if (value.packages) {
			baseConfig.packages = tools.concatObj(baseConfig.packages, value.packages)
		}
		for(var i in baseConfig.packages) {
			baseConfig.packages[i]['location'] = easyangularUrl + "/" + baseConfig.packages[i]['location']
		};

		// config合并
		var config = tools.getSubsFromObj(value, "config");
		tools.getSubsFromObj(config, "controllers");
		baseConfig.config = tools.concatObj(baseConfig.config, config)
		for(var k in baseConfig.config) {
			baseConfig.config["easyangular/" + k] = baseConfig.config[k];
		};
		baseConfig.config['app']['appName'] = value.appName
		baseConfig.config['services']['appName'] = value.appName
		baseConfig.config['services']['UIUrl'] = easyangularUrl + "/./ui/"

		//shim合并
		if (value.shim) {
			baseConfig.shim = tools.concatObj(baseConfig.shim, value.shim);
		}
	}

	function start(appConfig) {

		setFrameworkConfig(frameworkConfig)
		setAppConfig(appConfig) 

		//导入配置
		require.config(baseConfig);

		//启动应用
		console.debug("start " + appConfig.appName);
		console.debug(baseConfig);
		require(['require',
			'module',
			'domReady',
			'angular',
			'jquery',
			'jqueryui',
			'bootstrap',
			'easyangular/app',
			'easyangular/routes'
		], function (require, module,domReady) {
		
			event.preventDefault();

			//启动应用
			domReady(function () {
				angular.bootstrap(document, [appConfig.appName]);
			});

		});
	};

	return {
		start : start
	};
})



