
/* 框架说明
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-11-04
 * Version: $Revision$
 */


'use strict';

define([
	'module',
	'angular'
], function(module){

	var ui = angular.module('ui.easyangular.frameworkDesc',[]);
	
	ui.directive('frameworkDesc', function(GlobalConfig){
		return {
			link : function(scope, element, attrs) {
				element.text(GlobalConfig.frameVersion);
			}
		}
	});

	return ui
})
