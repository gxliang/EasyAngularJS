
/* 应用说明
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-28
 * Version: $Revision$
 */

'use strict';

define([
	'module',
	'angular'
], function(module){


return angular.module('ui.easyangular.appDesc',[])

.directive('appDesc', ['GlobalConfig', function(GlobalConfig){
	return {
		link : function(scope, element, attrs) {
			element.text(GlobalConfig.appName);
		}
	}
}]);

})

