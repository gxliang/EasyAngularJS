
/*
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: 2013-11-20
 * Copyright: asiainfo-linkage
 * Version: $Revision$
 */

require.config({
	baseUrl : "js",
	paths : {
		'jquery'  : 'lib/jquery',
		'angular-1.0.8' : 'lib/angular-1.0.8/angular',
		'angular-1.2.0' : 'lib/angular-1.2.0/angular'
	},
	map : {
		//对于所有的模块加载，使用本配置
		'*' : {
			'angular' : 'angular-1.0.8'
		},
		//对于some/module加载，使用本配置
		'app/newModule' : {
			'angular' : 'angular-1.2.0'
		}
	}
});

require([
	'jquery',
	'app/Welcome',
	'app/newModule',
	'app/oldModule'
],function(){

	var welcome = require('app/Welcome');

	$('#welcome').html(welcome);
})