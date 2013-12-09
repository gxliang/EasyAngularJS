

define([],function(){

function RatingController($scope) {
	console.debug("RatingController");

	$scope.rate = 7;
	$scope.max = 10;
	$scope.isReadonly = false;

	$scope.hoveringOver = function(value) {
		$scope.overStar = value;
		$scope.percent = 100 * (value / $scope.max);
	};

	$scope.ratingStates = [
		{stateOn: 'glyphicon glyphicon-ok-sign', stateOff: 'icon-ok-circle'},
		{stateOn: 'glyphicon glyphicon-star', stateOff: 'glyphicon glyphicon-star-empty'},
		{stateOn: 'glyphicon glyphicon-heart', stateOff: 'glyphicon glyphicon-ban-circle'},
		{stateOn: 'glyphicon glyphicon-heart'},
		{stateOff: 'glyphicon glyphicon-off'}
	];

	$scope.$apply()
};

return RatingController
})