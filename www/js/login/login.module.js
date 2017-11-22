(function(){
    'use strict';

    angular
        .module('login', [
            
        ])

        .config(function($stateProvider){

            $stateProvider
                .state('login', {
                    url: '/login',
                    templateUrl: 'js/login/login.html',
                    controller: 'loginCtrl',
                    controllerAs: 'login'
                });
        });

}());