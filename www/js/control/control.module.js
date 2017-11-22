angular.module('control', [])

.config(function($stateProvider, $urlRouterProvider){

    $stateProvider
        .state('control', {
            url: '/control/:id',
            templateUrl: 'js/control/control.html',
            controller: 'controlCtrl',
            controllerAs: 'control'
        });
})