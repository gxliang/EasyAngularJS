
/*
 * Author: U{lordking<mailto:lordking@163.com>}
 * Date: 2013-12-08
 * Copyright: lordking
 * Version: $Revision$
 */

'use strict';

define([
	'angular'
],function(){

return angular.module('ui.easyangular.rating', [])

.constant('ratingConfig', {
	max: 5,
	stateOn: null,
	stateOff: null
})

.controller('RatingController', ['$scope', '$attrs', '$parse', 'ratingConfig', function($scope, $attrs, $parse, ratingConfig) {	
	var self = this;

	this.stateOn = angular.isDefined($attrs.stateOn) ? $scope.$eval($attrs.stateOn) : ratingConfig.stateOn;
	this.stateOff = angular.isDefined($attrs.stateOff) ? $scope.$eval($attrs.stateOff) : ratingConfig.stateOff;


	this.createRateObjects = function(states) {
		var defaultOptions = {
			stateOn: self.stateOn,
			stateOff: self.stateOff
		};

		for (var i = 0, n = states.length; i < n; i++) {
			states[i] = angular.extend({ index: i }, defaultOptions, states[i]);
		}
		return states;
	};

	$scope.$parent.$watch($attrs.max,function(value) {
		
		var maxRange = value

		if (maxRange) {
			$scope.range = self.createRateObjects(new Array(maxRange));
		};

	})

	$scope.$parent.$watch($attrs.ratingStates,function(value) {
		var ratingStates = value
		if (ratingStates) {
			$scope.range =  self.createRateObjects(ratingStates)
		};
	})

	// Get objects used in template
	// if (this.maxRange) {
	// 	console.debug(this.maxRange)
	// 	$scope.range = angular.isDefined($attrs.ratingStates) ?  createRateObjects(angular.copy($scope.$eval($attrs.ratingStates))): this.createRateObjects(new Array(this.maxRange));		
	// };

	$scope.rate = function(value) {
		if ( $scope.readonly || $scope.value === value) {
			return;
		}

		$scope.value = value;
	};

	$scope.enter = function(value) {
		if ( ! $scope.readonly ) {
			$scope.val = value;
		}
		$scope.onHover({value: value});
	};

	$scope.reset = function() {
		$scope.val = angular.copy($scope.value);
		$scope.onLeave();
	};

	$scope.$watch('value', function(value) {
		$scope.val = value;
	});

	$scope.$parent.$watch($attrs.readonly, function(value){
		$scope.readonly = !!value;
	})


	// $scope.readonly = false;
	// if ($attrs.readonly) {
	// 	$scope.$watch($parse($attrs.readonly), function(value) {
	// 		$scope.readonly = !!value;
	// 	});
	// }
}])

.directive('rating', ['GlobalConfig', function(GlobalConfig) {
	return {
		restrict: 'EA',
		scope: {
			value: '=',
			onHover: '&',
			onLeave: '&'
		},
		controller: 'RatingController',
		templateUrl: GlobalConfig.UIUrl + 'template/rating/rating.html',
		replace: true
	};
}]);
	
})