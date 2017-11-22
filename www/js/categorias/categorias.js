(function(){
    'use strict';

    angular
        .module('categorias')
        .controller('categoriasCtrl', categoriasCtrl)

    /** @ngInject */
    function categoriasCtrl($state, $ionicPopup){
        var categorias = this;
        categorias.verCategoria = verCategoria;
        categorias.items = [];
        
        init();

        function init(){
            console.log('iniciar categorias');
            categorias.items = [
                {id: '1', titulo: 'Peliculas', url: 'http://www.arasancinemas.com/images/banner.jpg'},
                {id: '2', titulo: 'Series', url: 'http://laguiatv.abc.es/Media/201509/20/friends--644x362.jpg'},
                {id: '3', titulo: 'Conciertos', url:'http://www.kclimo.com/wp-content/uploads/2015/02/hot-KC-concert-crowd.jpg'},
                {id: '4', titulo: 'documentales', url: 'http://newhouse.syr.edu/sites/default/files/styles/page-image/public/dfh-header_1.jpg?itok=c_ohIcUt'}
            ];
        }

        function verCategoria(item){
            console.log(item);
            if(item.id != 2){
                showAlert();
            }else{
                $state.go('items');
            }
        }

        function showAlert() {
            var alertPopup = $ionicPopup.alert({
                title: 'No disponible!',
                template: 'Esta categoria esta en construccion, por ahora lo sentimos. Trabajamos para traer mas entretenimiento GRATIS xD.'
            });

            alertPopup.then(function(res) {
                console.log('Thank you for not eating my delicious ice cream cone');
            });
        }

    }

}());