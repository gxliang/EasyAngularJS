
/*
 * Author: U{lordking<mailto:lordking@163.com>}
 * Date: 2013-12-07
 * Copyright: lordking
 * Version: $Revision$
 */

'use strict';

define([],function(){

function AccordionController($scope) {
	console.debug("AccordionController");
	
	$scope.oneAtATime = true;

	$scope.groups = [
		{
			title: "Dynamic Group Header - 1",
			content: "Dynamic Group Body - 1"
		},
		{
			title: "Dynamic Group Header - 2",
			content: "Dynamic Group Body - 2"
		}
	];

	$scope.items = ['Item 1', 'Item 2', 'Item 3'];

	$scope.addItem = function() {
		var newItemNo = $scope.items.length + 1;
		$scope.items.push('Item ' + newItemNo);
	};

	$scope.$apply();
}

return AccordionController
})