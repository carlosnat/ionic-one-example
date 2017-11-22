(function(){
    'use strict';

    angular
        .module('registro', [
            
        ])

        .config(function($stateProvider){
            $stateProvider
                .state('registro', {
                    url: '/registro',
                    templateUrl: 'js/registro/registro.html',
                    controller: 'registroCtrl',
                    controllerAs: 'registro'
                });
        });

}());