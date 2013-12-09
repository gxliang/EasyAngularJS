
/*
 * Author: U{lordking<mailto:lordking@163.com>}
 * Date: 2013-12-09
 * Copyright: lordking
 * Version: $Revision$
 */

define([],function(){

function TooltipController($scope) {
	console.debug("TooltipController");

	$scope.dynamicTooltip = "Hello, World!";
	$scope.dynamicTooltipText = "dynamic";
	$scope.htmlTooltip = "I've been made <b>bold</b>!";

	$scope.$apply()
};

return TooltipController
})