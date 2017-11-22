(function(){
    'use strict';

    angular
        .module('capitulos')
        .controller('capitulosCtrl', capitulosCtrl)

    /** @ngInject */
    function capitulosCtrl($state){
        var capitulos = this;
        capitulos.verCapitulo = verCapitulo;

        capitulos.temporada = {};
        capitulos.capitulos;        
        init();

        function init(){
            capitulos.temporada = { titulo: 'Temporada 00'};

            capitulos.capitulos = [
                            {id: 1, titulo: 'capitulo 00x00', avatar: 'http://static.t13.cl/images/original/2015/12/1450390956-photo-be47ad3dd86c5524baddc9cb3941f35a-1387306244-22.jpg'},
                            {id: 2, titulo: 'capitulo 00x01', avatar: 'http://static.t13.cl/images/original/2015/12/1450390956-photo-be47ad3dd86c5524baddc9cb3941f35a-1387306244-22.jpg'},
                            {id: 3, titulo: 'capitulo 00x02', avatar: 'http://static.t13.cl/images/original/2015/12/1450390956-photo-be47ad3dd86c5524baddc9cb3941f35a-1387306244-22.jpg'},
                            {id: 4, titulo: 'capitulo 00x03', avatar: 'http://static.t13.cl/images/original/2015/12/1450390956-photo-be47ad3dd86c5524baddc9cb3941f35a-1387306244-22.jpg'}
                        ];
        }

        function verCapitulo(capitulo){
            var obj = { id: capitulo.id};
            $state.go('control', obj);
        }

    }

}());