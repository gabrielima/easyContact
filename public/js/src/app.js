(function() {
	
	'use strict';

	angular
		.module('easyContact', ['ui.router', 'ngResource'])
		.config(config);

	function config($stateProvider, $urlRouterProvider, $locationProvider) {
		
		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state('/', {
				url: "/",
				templateUrl: "views/main.html",
				controller: 'MainController'
			})
			.state('list', {
				url: "/list",
				templateUrl: "views/list.html",
				controller: 'ContactsController'
			})
			.state('auth', {
				url: "/authentication",
				templateUrl: "views/auth.html",
				controller: 'AuthController'
			});	

		$locationProvider.html5Mode(true);
	}

})();