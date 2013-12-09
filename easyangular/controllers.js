
/* 全局controller配置。
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-27
 * Version: $Revision$
 */

'use strict';

define([
	'module',
	'require',
	'angular'
], function(module,require){

	function register(controllers, controllerName, controllerPath) {

		var controllers = controllers.controller(controllerName, function($scope, $injector) {
				require([controllerPath], function(controllerName) {
					$injector.invoke(controllerName, this, {'$scope': $scope});
				});
			});

		return controllers;
	}


	var config = module.config();

	var controllers = angular.module('controllers', []);

	for(var key in config) {

		var controllerName = key,
			controllerPath = config[key];
				
		var controllers = register(controllers, controllerName, controllerPath);
			
	}
		
	return controllers
});