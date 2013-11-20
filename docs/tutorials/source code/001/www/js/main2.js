
/*
 * Author: U{jinlei<mailto:jinlei3@asiainfo-linkage.com>}
 * Date: 2013-11-20
 * Copyright: asiainfo-linkage
 * Version: $Revision$
 */

require.config({
	baseUrl : "js",
	paths : {
		jquery : 'lib/jquery'
	}
});

require([
	'jquery',
	'app/Welcome'
],function(){

	var welcome = require('app/Welcome');

	$('#welcome').html(welcome);
})