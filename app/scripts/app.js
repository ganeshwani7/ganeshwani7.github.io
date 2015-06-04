'use strict';

/**
 * @ngdoc overview
 * @name ganeshwani7githubioApp
 * @description
 * # ganeshwani7githubioApp
 *
 * Main module of the application.
 */
angular
  .module('ganeshwani7githubioApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/about', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).controller('AppCtrl', ['$anchorScroll','$scope', '$location', function ($anchorScroll, $scope, $location){

    $scope.activeClass = 'about';

    $scope.handleAnchor = function (index) {
      $anchorScroll.yOffset = 50;
      console.log($location.hash());
      if ($location.hash() !== index) {
        $location.hash(index);
        $scope.activateClass(index);
      }
      $anchorScroll();
    };

    $scope.activateClass = function (classIn) {
      console.log('inside activate class with value ' + classIn);
      $scope.activeClass = classIn;
      if (!$scope.$$phase) {
        $scope.$apply();
      }
    };
  }]);
