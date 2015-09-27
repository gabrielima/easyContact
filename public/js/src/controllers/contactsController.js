(function() {
	
	'use strict';

	angular
		.module('easyContact')
		.controller('ContactsController', contactsController);

	function contactsController($scope, dataService) {
		var contacts = dataService.query(function(){
			$scope.contacts = contacts.map(function(obj){
				obj.expand = false;
				return obj;
			});
		});
	}

})();