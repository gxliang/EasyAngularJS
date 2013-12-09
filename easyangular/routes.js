/* 全局路由配置
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-27
 * Version: $Revision$
 */

'use strict';

define([
	'module',
	'easyangular/app'
], function (module, app) {

	var config = module.config();

	return app.config(['$routeProvider', function($routeProvider) {

		for (var key in config) {
			var route = config[key];
			if (route["redirectTo"]) {
				$routeProvider.otherwise(route);
			} else {
				$routeProvider.when(route['url'], route['config']);
			}
		}
	}]);

});