(function(){
    'use strict';

    angular
        .module('categorias', [])

        .config(function($stateProvider){
            $stateProvider
                .state('categorias', {
                    url: '/categorias',
                    templateUrl: 'js/categorias/categorias.html',
                    controller: 'categoriasCtrl',
                    controllerAs: 'categorias'
                })
        })

}());