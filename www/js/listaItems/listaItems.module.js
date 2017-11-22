(function(){
    'use strict';

    angular
        .module('listaItems', [
            
        ])

        .config(function($stateProvider){
            $stateProvider
                .state('items',{
                    url: '/items',
                    templateUrl: 'js/listaItems/listaItems.html',
                    controller: 'listaItemsCtrl',
                    controllerAs: 'listaItems'
                });
        })

}());