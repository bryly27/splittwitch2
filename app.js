var split = angular.module('split', ['ngRoute', 'ngCookies', 'ui.router']);


split.config(function($stateProvider, $urlRouterProvider){


	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('splittwitch', {
			url: '/',
			templateUrl: './partials/one.html',
		})
		.state('one', {
			url: '/one',
			templateUrl: './partials/one.html',
		})
		.state('two', {
			url: '/two',
			templateUrl: './partials/two.html',
		})
		.state('three', {
			url: '/three',
			templateUrl: './partials/three.html',
		})
		.state('four', {
			url: '/four',
			templateUrl: './partials/four.html',
		})
		.state('six', {
			url: '/team',
			templateUrl: './partials/six.html',
		})


})