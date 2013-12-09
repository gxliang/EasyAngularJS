/* directives包的主程序
 * Author: U{lordking<mailto:lordking@163.com>}
 * Date: 2013-12-02
 * Copyright: lordking
 * Version: $Revision$
 */


'use strict';

define([
	'module',
	'angular',
	'./appDesc',
	'./frameworkDesc',

	'./buttons',
	'./alert',
	'./dropdownToggle',
	'./modal',
	'./carousel',
	'./collapse',
	'./accordion',
	'./datepicker',
	'./tooltip',
	'./popover',
	'./pagination',
	'./progressbar',
	'./rating',
	'./tabs',
	'./timepicker',
	'./typeahead'
],function(module){

	var ui = angular.module('ui.easyangular',[
			'ui.easyangular.appDesc',
			'ui.easyangular.frameworkDesc',

			'ui.easyangular.buttons',
			'ui.easyangular.alert',
			'ui.easyangular.dropdownToggle',
			'ui.easyangular.modal',
			'ui.easyangular.carousel',
			'ui.easyangular.collapse',
			'ui.easyangular.accordion',
			'ui.easyangular.datepicker',
			'ui.easyangular.tooltip',
			'ui.easyangular.popover',
			'ui.easyangular.pagination',
			'ui.easyangular.progressbar',
			'ui.easyangular.rating',
			'ui.easyangular.tabs',
			'ui.easyangular.timepicker',
			'ui.easyangular.typeahead'
		]);


	return ui;
})