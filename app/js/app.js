'use strict';


// Declare app level module which depends on filters, and services
angular.module('hexWorker', ['hexWorker.filters', 'hexWorker.services', 'hexWorker.directives']).
  config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'partials/home.html', controller: HomeController});
  //   $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: MyCtrl2});
  //   $routeProvider.otherwise({redirectTo: '/view1'});
  }]);
