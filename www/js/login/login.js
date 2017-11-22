(function(){
    'use strict';

    angular
        .module('login')
        .controller('loginCtrl', loginCtrl)

    /** @ngInject */
    function loginCtrl($state, $ionicPopup){
        var login = this;
        login.registro = registro;
        login.validarUsuario = validarUsuario;
        
        init();

        function init(){

        }

        function registro(){
            $state.go('registro');
        }

        function validarUsuario(){
            //

            firebase.auth().signInWithEmailAndPassword(login.userData.email, login.userData.pass)
            .then(function(respuesta){
                console.log(respuesta);
                $state.go('categorias');
            })
            .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                // ...  
                showAlert('Error validacion', errorMessage);
            });

        }

        function showAlert(titulo, msg){
            var alertPopup = $ionicPopup.alert({
                title: titulo,
                template: msg
            });

            alertPopup.then(function(res) {
                console.log('Thank you for not eating my delicious ice cream cone');
            });
        }

    }

}());