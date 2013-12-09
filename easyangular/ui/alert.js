
/* 警告
 * Author: U{lordking<mailto:lordking@163.com>}
 * Date: 2013-12-04
 * Copyright: lordking
 * Version: $Revision$
 */

'use strict';

define([
	'angular'
], function(module){


return angular.module("ui.easyangular.alert", [])

.directive('alert', ['GlobalConfig', function (GlobalConfig) {
	return {
		restrict:'EA',
		templateUrl: GlobalConfig.UIUrl + 'template/alert/alert.html',
		transclude:true,
		replace:true,
		scope: {
		  type: '=',
		  close: '&'
		},
		link: function(scope, element, attrs) {
		  scope.closeable = "close" in attrs;
		}
	};
}]);

})