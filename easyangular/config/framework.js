/* 基础设置
 * Author: U{lordking<mailto:lordking@163.com>}
 * Date: 2013-12-02
 * Copyright: lordking
 * Version: $Revision$
 */

define([],function(){

	return {

		baseUrl : "js",					//当前工程js代码路径

		config : {
			app : {},
			services : {
				frameVersion : 'EasyAngularJS 0.1beta'	//当前版本的名称
			}
		},

		//路径配置
		paths : {
			//设置公共库
			text : 'lib/requirejs/text',
			domReady : 'lib/requirejs/domReady',

			angular : 'lib/angular-1.2.0/angular',
			angularCookies : 'lib/angular-1.2.0/angular-cookies.min',
			angularRoute : 'lib/angular-1.2.0/angular-route.min',
			// angularBootstrap : '/lib/angular-bootstrap/ui-bootstrap-tpls-0.6.0-custom',
			
			jquery : 'lib/jquery/jquery-1.10.2.min',
			jqueryui : 'lib/jquery-ui/js/jquery-ui-1.10.3.custom.min',


			bootstrap : 'lib/bootstrap/js/bootstrap.min',
			holder : 'lib/utils/holder.min',

			jqGrid			: "lib/utils/jqgrid/jquery.jqGrid.min",
			jqGridLocale	: "lib/utils/jqgrid/i18n/grid.locale-cn",
		},

		//依赖关系配置
		shim :　{
			jquery: {
				exports: '$'
			},
			jqueryui: {
				deps: ['jquery']
			},
			
			angular:{
				exports:'angular'
			},
			angularCookies : ['angular'],
			angularRoute: ['angular'],
			// angularBootstrap: ['angular'],

			'bootstrap': ['jquery'],
			'bootstrap/holder': {
				deps: ["jquery"],
				exports: '$.fn.holder'
			},

			jqGrid:['jquery','jqGridLocale'],
		},

		packages : [
			//ui.easyangular
			{
				name : 'ui.easyangular',
				location : 'ui'
			}
		],

		//优先级配置
		priority:[
			'angular'
		]
	}
})