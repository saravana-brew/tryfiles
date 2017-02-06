var app=angular.module('myapp',[ngRoute]);
app.config($routeProvider,function ($routeProvider) {
  $routeProvider
  .when('/',{
    templateUrl : login.html;
  });
  .when('/dashboard',{
template : "remaining contents "
  });
});
