(function(){
    'use strict';

    angular
        .module('registro')
        .controller('registroCtrl', registroCtrl)

    /** @ngInject */
    function registroCtrl($state, $ionicPopup, $ionicLoading){
        var registro = this;
        registro.nuevoUsuario = nuevoUsuario;

        registro.userData = {};
        
        
        init();

        function init(){
        }

        function showModal() {
            $ionicLoading.show({
                template: '<ion-spinner icon="spiral"></ion-spinner>Registrando...'
            }).then(function(){
                console.log("The loading indicator is now displayed");
            });
        };

        function hideModal(){
            $ionicLoading.hide().then(function(){
                console.log("The loading indicator is now hidden");
            });
        };

        function nuevoUsuario(){
            if (validarFormularioRegistro() === true){
                showModal();
                console.log(registro.userData);
                firebase.auth().createUserWithEmailAndPassword(registro.userData.correo, registro.userData.clave)
                    .then(function(respuesta){
                        console.log(respuesta);
                        actualizarUserData();
                    })
                    .catch(function(error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                });
            }
            
        }

        function actualizarUserData(){
            var user = firebase.auth().currentUser;

            console.log('hola user:');
            console.log(user);

            user.updateProfile({
                displayName: registro.userData.nombre,
                photoURL: "https://static1.squarespace.com/static/52f174dde4b08a02b160afe4/t/52f7d3ade4b04cffe232f907/1391973294003/avatar.png"
            }).then(function(resp) {
                console.log('data actualizda');
                console.log(resp);
                // Update successful.
                hideModal();

                if (user != null) {
                    user.providerData.forEach(function (profile) {
                        console.log("Sign-in provider: "+profile.providerId);
                        console.log("  Provider-specific UID: "+profile.uid);
                        console.log("  Name: "+profile.displayName);
                        console.log("  Email: "+profile.email);
                        console.log("  Photo URL: "+profile.photoURL);
                    });
                }

                registroExitoso();

            }, function(error) {
                // An error happened.
                console.log('hubo error');
                console.log(error);
            });

            

            
        }

        function registroExitoso(){

            var alertPopup = $ionicPopup.alert({
                title: "Exito!!",
                template: "El usuario se creo exitosamente"
            });

            alertPopup.then(function(res) {
                registro.userData = {};
                $state.go('login');
                console.log('Thank you for not eating my delicious ice cream cone');
            });

            $state.go('login');
        }

        function validarFormularioRegistro(){
            var validacion = true;

            if(angular.isUndefined(registro.userData.nombre) === true || registro.userData.nombre === ""){
                showAlert('Falta datos!', 'Se requiere nombre');
                validacion = false;
                return validacion;
            }

            if(angular.isUndefined(registro.userData.correo) === true || registro.userData.correo === ""){
                showAlert('Falta datos!', 'Se requiere correo de usuario');
                validacion = false;
                return validacion;
            }

            if(angular.isUndefined(registro.userData.clave) === true || registro.userData.clave === ""){
                showAlert('Falta datos!', 'Se requiere clave');
                validacion = false;
                return validacion;
            }

            if(angular.isUndefined(registro.userData.reClave) === true || registro.userData.reClave === ""){
                showAlert('Falta datos!', 'Se requiere repetir la clave ingresada');
                validacion = false;
                return validacion;
            }

            if(registro.userData.clave !==  registro.userData.reClave){
                showAlert('Incongruencia!', 'las clave no coinciden, deben ser iguales');
                validacion = false;
                return validacion;
            }

            return validacion;
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