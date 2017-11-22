(function(){
    'use strict';

    angular
        .module('item')
        .controller('itemCtrl', itemCtrl)

    /** @ngInject */
    function itemCtrl($scope, $ionicPopup, $state){
        var item = this;
        item.verTemporada = verTemporada;

        item.data = {};
        
        init();

        function init(){

             item.data = {
                 id: 's1', 
                 titulo: 'Los simpsons', 
                 poster: 'http://www.cineol.net/galeria/carteles/bigtmp_134serie.jpg', 
                 descripcion: ' La serie es una sátira de la sociedad estadounidense que narra la vida y el día a día de una familia de clase media de ese país (cuyos miembros son Homer, Marge, Bart, Lisa y Maggie Simpson) que vive en un pueblo ficticio llamado Springfield.',
                 logo: 'https://k16.kn3.net/4EC88C98D.png',
                 release: '1985',
                 temporadas: [
                     {id: 'st0', titulo: 'Temporada 00', totalCapitulos: '8',
                        capitulos: [
                            {id: 1, titulo: 'capitulo 00x00', avatar: 'http://static.t13.cl/images/original/2015/12/1450390956-photo-be47ad3dd86c5524baddc9cb3941f35a-1387306244-22.jpg'},
                            {id: 2, titulo: 'capitulo 00x01', avatar: 'http://static.t13.cl/images/original/2015/12/1450390956-photo-be47ad3dd86c5524baddc9cb3941f35a-1387306244-22.jpg'},
                            {id: 3, titulo: 'capitulo 00x02', avatar: 'http://static.t13.cl/images/original/2015/12/1450390956-photo-be47ad3dd86c5524baddc9cb3941f35a-1387306244-22.jpg'},
                            {id: 4, titulo: 'capitulo 00x03', avatar: 'http://static.t13.cl/images/original/2015/12/1450390956-photo-be47ad3dd86c5524baddc9cb3941f35a-1387306244-22.jpg'}
                        ]},
                     {id: 'st1', titulo: 'Temporada 01', totalCapitulos: '13'},
                     {id: 'st2', titulo: 'Temporada 02', totalCapitulos: '22'},
                     {id: 'st3', titulo: 'Temporada 03', totalCapitulos: '24'}
                 ]
            };
            
        }

        function verTemporada(temporada){
            console.log(temporada);

            if(temporada.id != 'st0'){
                showAlert();
            }else{
                var obj = { idTemporada : '00'};
                $state.go('capitulos', obj);    
            }
            
        }

        function showAlert() {
            var alertPopup = $ionicPopup.alert({
                title: 'No disponible!',
                template: 'Esta temporada esta en construccion, por ahora lo sentimos. Trabajamos para traer mas entretenimiento GRATIS xD.'
            });

            alertPopup.then(function(res) {
                console.log('Thank you for not eating my delicious ice cream cone');
            });
        }
    }
}());