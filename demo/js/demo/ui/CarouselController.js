
/*
 * Author: U{lordking<mailto:lordking@163.com>}
 * Date: 2013-12-07
 * Copyright: lordking
 * Version: $Revision$
 */

'use strict';

define([],function(){

function CarouselController($scope) {
	console.debug("CarouselController");

	$scope.myInterval = 5000;
	var slides = $scope.slides = [];
	$scope.addSlide = function() {
		var newWidth = 200 + ((slides.length + (25 * slides.length)) % 150);
		slides.push({
			image: 'http://placekitten.com/' + newWidth + '/200',
			text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
				['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
		});
	};
	for (var i=0; i<4; i++) {
	  $scope.addSlide();
	}

	$scope.$apply();
}

return CarouselController;
})