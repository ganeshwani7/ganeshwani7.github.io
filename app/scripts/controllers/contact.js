'use strict';

/**
 * @ngdoc function
 * @name ganeshwani7githubioApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the ganeshwani7githubioApp
 */
angular.module('ganeshwani7githubioApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.handleButton('contact');
  });
