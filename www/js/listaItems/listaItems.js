(function(){
    'use strict';

    angular
        .module('listaItems')
        .controller('listaItemsCtrl', listaItemsCtrl)

    /** @ngInject */
    function listaItemsCtrl($ionicPopup, $state){
        var listaItems = this;
        listaItems.verDetalles = verDetalles;
        listaItems.items = [];

        init();

        function init(){

            listaItems.items = [
                {id: 's1', titulo: 'Los simpsons', poster: 'http://thumbs3.ebaystatic.com/d/l225/m/mGNyfwXd3zvtanT7v0eCZHA.jpg', score: 8.5, categoria: 'animada-comedia', temporadas: 28},
                {id: 's2', titulo: 'Friends', poster: 'http://www.filmosphere.com/wp-content/uploads/2015/10/friends-522501392b273.jpg', score: 9, categoria: 'comedia', temporadas: 10},
                {id: 's3', titulo: 'Dragon Ball', poster: 'http://cdn-static.sidereel.com/tv_shows/21551/giant_2x/76666-7.jpg', score: 8.9, categoria: 'animada-anime', temporadas: 2},
                {id: 's4', titulo: 'The Walking Dead', poster: 'https://s-media-cache-ak0.pinimg.com/236x/a9/d8/7c/a9d87c81fc8e92821099c508da6c518f.jpg', score: 7.8, categoria: 'suspenso', temporadas: 7},
                {id: 's5', titulo: 'Games of throne', poster: 'http://www.thinkgeek.com/images/products/zoom/1f15_game_of_thrones_poster.jpg', score: 7.5, categoria: 'fantasia', temporadas: 6}
            ];
        }

        function verDetalles(item){
            console.log(item);
            if (item.id != 's1'){
                 showAlert();
            }else{
               $state.go('item', {id: 's1'});
            }
            
        }

        function showAlert() {
            var alertPopup = $ionicPopup.alert({
                title: 'No disponible',
                template: 'La serie que quieres visualizar aun no esta disponible, vienen en camino...esperalas.'
            });

            alertPopup.then(function(res) {
                console.log('Thank you for not eating my delicious ice cream cone');
            });
        }

    }

}());