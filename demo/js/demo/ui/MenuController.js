
/* 下拉菜单的控制器定义
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-30
 * Version: $Revision$
 */

'use strict';

define([], function () {

function DropdownController($scope, $timeout) {
	console.debug("DropdownController");
	
	$scope.items = [
		{
			title: "Aberdeen"
		},
		{
			title: "Ada"
		},
		{
			title: "Adamsville"
		},
		{
			title: "Addyston"
		},
		{
			title: "Delphi"
		},
		{
			title: "Saarland",
		},
		{
			title: "Salzburg",
		},
		{
			title: "Amesville",
		},
	];

	$scope.$apply();
};

return DropdownController;
});