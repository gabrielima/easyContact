(function() {

	'use strict';

	angular
		.module('easyContact')
		.factory('dataService', dataService);

	dataService.$inject = ['$resource'];

	function dataService($resource) {
		return $resource('../contacts/:id');
	}

})();