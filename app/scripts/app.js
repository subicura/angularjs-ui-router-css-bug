'use strict';

angular.module('sampleApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router'
])
  .config(function ($stateProvider) {
    $stateProvider
      .state('sample1', {
        url: '/sample1',
        templateUrl: '/views/sample1.html'
      })
      .state('sample2', {
        url: '/sample2',
        templateUrl: '/views/sample2.html'
      })
      .state('detail', {
        url: '/detail',
        templateUrl: '/views/detail.html'
      })
      .state("otherwise", {
        url: "*path",
        templateUrl: '/views/main.html',
        controller: 'MainCtrl'
      });
  });
