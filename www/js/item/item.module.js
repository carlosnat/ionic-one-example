(function(){
    'use strict';

    angular
        .module('item', [
            
        ])

        .config(function($stateProvider){
            $stateProvider
                .state('item', {
                    url: '/item/:id',
                    templateUrl: 'js/item/item.html',
                    controller: 'itemCtrl',
                    controllerAs: 'item'
                });
        });

}());