import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mainController from 'main/main';

const app = angular.module('app', [uiRouter]);

app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('main', {
      url: '/',
      template: require('main/main.html'),
      controller: mainController
    })
    .state('about', {
      url: '/about',
      template: require('about/about.html')
    });
    $locationProvider.html5Mode(true);
});

export default app;
