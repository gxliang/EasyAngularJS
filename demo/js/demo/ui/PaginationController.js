
/* 分页的控制器定义
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: asiainfo-linkage
 * Copyright: 2013-10-30
 * Version: $Revision$
 */

'use strict';

define([], function () {

	function PaginationController($scope) {
		console.debug("PaginationController");
		
		$scope.totalItems = 64;
		$scope.currentPage = 4;
		$scope.maxSize = 5;
		
		$scope.setPage = function (pageNo) {
			$scope.currentPage = pageNo;
		};

		$scope.bigTotalItems = 175;
		$scope.bigCurrentPage = 1;

		$scope.$apply();
	};

	return PaginationController;
});