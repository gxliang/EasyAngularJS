
/*
 * Author: U{lordking<mailto:lordking@163.com>}
 * Date: 2013-12-08
 * Copyright: lordking
 * Version: $Revision$
 */

'use strict';

define([],function(){

return angular.module('ui.easyangular.bindHtml', [])

.directive('bindHtmlUnsafe', function () {
	return function (scope, element, attr) {
		element.addClass('ng-binding').data('$binding', attr.bindHtmlUnsafe);
		scope.$watch(attr.bindHtmlUnsafe, function bindHtmlUnsafeWatchAction(value) {
			element.html(value || '');
		});
	};
});
	
})