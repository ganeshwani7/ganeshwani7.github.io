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
    'ngTouch'
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
  }).controller('AppCtrl', ['$scope', function ($scope){

    $scope.about = 'active';
    $scope.resume = '';
    $scope.contact = '';

    $scope.handleButton = function ( attr){
      //console.log('hi, hope everything is good');
      if( attr === 'resume'){
        $scope.resume = 'active';
        $scope.about = '';
        $scope.contact = '';
      }
      else if( attr === 'about'){
        $scope.resume = '';
        $scope.about = 'active';
        $scope.contact = '';
      }
      else if( attr === 'contact'){
        $scope.resume = '';
        $scope.about = '';
        $scope.contact = 'active';
      }
    };
  }]);
