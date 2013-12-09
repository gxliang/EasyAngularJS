
/*
 * Author: U{lordking<mailto:lordking@163.com>}
 * Date: 2013-12-08
 * Copyright: lordking
 * Version: $Revision$
 */

'use strict';

define([],function(){

function ProgressController($scope) {
	console.debug("ProgressController");
	
	$scope.max = 200;

	$scope.random = function() {
		var value = Math.floor((Math.random() * 100) + 1);
		var type;

		if (value < 25) {
			type = 'success';
		} else if (value < 50) {
			type = 'info';
		} else if (value < 75) {
			type = 'warning';
		} else {
			type = 'danger';
		}

		$scope.showWarning = (type === 'danger' || type === 'warning');

		$scope.dynamic = value;
		$scope.type = type;
	};
	$scope.random();
	
	$scope.randomStacked = function() {
		$scope.stacked = [];
		var types = ['success', 'info', 'warning', 'danger'];
		
		for (var i = 0, n = Math.floor((Math.random() * 4) + 1); i < n; i++) {
				var index = Math.floor((Math.random() * 4));
				$scope.stacked.push({
					value: Math.floor((Math.random() * 30) + 1),
					type: types[index]
				});
		}
	};
	$scope.randomStacked();

	$scope.$apply();
};

return ProgressController
})