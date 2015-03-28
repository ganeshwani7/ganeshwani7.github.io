'use strict';

/**
 * @ngdoc function
 * @name ganeshwani7githubioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ganeshwani7githubioApp
 */
angular.module('ganeshwani7githubioApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.handleButton = function (){
      //alert('hi');
      console.log('hey');
    };
  });
