(function(){
    'use strict';

    angular
        .module('capitulos', [
            
        ])

        .config(function($stateProvider){

            $stateProvider
                .state('capitulos', {
                    url: 'capitulos/:idTemporada',
                    templateUrl: 'js/capitulos/capitulos.html',
                    controller: 'capitulosCtrl',
                    controllerAs: 'capitulos'
                });

        });

}());