var app = angular.module('trippybaba', ['ngRoute']);


app.config(['$routeProvider',
function($routeProvider) {
  $routeProvider.
  when('/', {
    title: 'Home',
    templateUrl: 'partials/home.php',
    controller: ''
  }).
  otherwise({
    redirectTo: '/'
  });
}]);
