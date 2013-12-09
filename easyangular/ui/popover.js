
/*
 * Author: U{lordking<mailto:lordking@163.com>}
 * Date: 2013-12-08
 * Copyright: lordking
 * Version: $Revision$
 */

'use strict';

define([
	'angular',
	'./tooltip'
],function(){

/**
 * The following features are still outstanding: popup delay, animation as a
 * function, placement as a function, inside, support for more triggers than
 * just mouse enter/leave, html popovers, and selector delegatation.
 */
return angular.module( 'ui.easyangular.popover', [ 'ui.easyangular.tooltip' ] )

.directive( 'popoverPopup', ['GlobalConfig', function (GlobalConfig) {
	return {
		restrict: 'EA',
		replace: true,
		scope: { title: '@', content: '@', placement: '@', animation: '&', isOpen: '&' },
		templateUrl: GlobalConfig.UIUrl +'template/popover/popover.html'
	};
}])

.directive( 'popover', [ '$compile', '$timeout', '$parse', '$window', '$tooltip', function ( $compile, $timeout, $parse, $window, $tooltip ) {
	return $tooltip( 'popover', 'popover', 'click' );
}]);

	
})