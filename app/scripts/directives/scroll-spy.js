'use strict';

/**
 * @ngdoc directive
 * @name ganeshwani7githubioApp.directive:scrollSpy
 * @description
 * # scrollSpy
 */
angular.module('ganeshwani7githubioApp')
  .directive('scrollSpy', function ($window) {
    return {
      link: function postLink(scope) {
        var offsetFromTop, height;
//        element.text('this is the scrollSpy directive');
        angular.element($window).bind('scroll', function() {

          offsetFromTop = $('#resume').offset().top - 50;
          if (this.pageYOffset < offsetFromTop) {
            scope.activateClass('about');
            return;
          }
          height = $('#resume').height();
          if (this.pageYOffset >= (offsetFromTop - 100) && this.pageYOffset < (offsetFromTop + height - 50)) {
            scope.activateClass('resume');
            return;
          }
          offsetFromTop = $('#resume').offset().top + 51;
          height = $('#resume').height();
          if (this.pageYOffset > (offsetFromTop + height)) {
            console.log(this.pageYOffset);
            console.log(offsetFromTop);
            console.log(offsetFromTop + height);
            scope.activateClass('contact');
          }
        });
      }
    };
  });
