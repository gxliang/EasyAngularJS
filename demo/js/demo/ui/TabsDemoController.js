
/*
 * Author: U{lordking<mailto:lordking@163.com>}
 * Date: 2013-12-08
 * Copyright: lordking
 * Version: $Revision$
 */

define([],function(){

function TabsDemoController($scope) {
	console.debug("TabsDemoController");
	
	$scope.tabs = [
		{ title:"Dynamic Title 1", content:"Dynamic content 1" },
		{ title:"Dynamic Title 2", content:"Dynamic content 2", disabled: true }
	];

	$scope.alertMe = function() {
		setTimeout(function() {
			alert("You've selected the alert tab!");
		});
	};

};

return TabsDemoController
})