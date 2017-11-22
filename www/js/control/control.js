(function(){
    'use strict';

    angular
        .module('control')
        .controller('controlCtrl', controlCtrl)

    /** @ngInject */
    function controlCtrl($stateParams){

        

        var control = this;
        control.play = play;
        control.pause = pause;
        control.cambiarCapitulo = cambiarCapitulo;
        control.cambiarPantalla = cambiarPantalla;
        control.videoRef;
        control.capituloSelected;
        control.datos;
        control.capitulo = {};
        control.verCapituloEnWeb = true;
        control.entrada = true;
        
        init();
        

        function init(){
            control.videoRef = firebase.database().ref('videoControl');

            
            control.videoRef.once('value').then(function(snapshot) {
                console.log(snapshot.val());
                control.datos = snapshot.val();
                setCapitulo();
            });

            var idCapitulo = parseInt($stateParams.id);
            console.log(idCapitulo);
            switch(idCapitulo){
                case 1:
                    control.capitulo = {
                        titulo : 'Simpsons 00x01',
                        poster: 'https://upload.wikimedia.org/wikipedia/en/4/47/Simpsons_on_Tracey_Ullman.png',
                        descripcion: 'Primero capitulo de los Simpsons, presentando la familia en la pantalla chica.',
                        source: 'sources/series/losSimpsons/temp00/0x01.mp4'
                    }; 
                break;
                
                case 2:
                    control.capitulo = {
                        titulo : 'Simpsons 00x02',
                        poster: 'https://upload.wikimedia.org/wikipedia/en/4/47/Simpsons_on_Tracey_Ullman.png',
                        descripcion: 'Primero capitulo de los Simpsons, presentando la familia en la pantalla chica.',
                        source: 'sources/series/losSimpsons/temp00/0x02.mp4'
                    }; 
                break;
                case 3:
                    control.capitulo = {
                        titulo : 'Simpsons 00x03',
                        poster: 'https://upload.wikimedia.org/wikipedia/en/4/47/Simpsons_on_Tracey_Ullman.png',
                        descripcion: 'Primero capitulo de los Simpsons, presentando la familia en la pantalla chica.',
                        source: 'sources/series/losSimpsons/temp00/0x03.mp4'
                    }; 
                break;
                case 4:
                    control.capitulo = {
                        titulo : 'Simpsons 00x04',
                        poster: 'https://upload.wikimedia.org/wikipedia/en/4/47/Simpsons_on_Tracey_Ullman.png',
                        descripcion: 'Primero capitulo de los Simpsons, presentando la familia en la pantalla chica.',
                        source: 'sources/series/losSimpsons/temp00/0x03.mp4'
                    }; 
                break;
            };

            

            
            
        }

        function play(){
            control.datos.control.accion = 'play';
            control.videoRef.set(control.datos);
        }

        function pause(){
            control.datos.control.accion = 'pause';
            control.videoRef.set(control.datos);
        }

        function cambiarCapitulo(){
            console.log(control.capituloSelected);
            control.datos.control.video = control.capituloSelected;
            control.videoRef.set(control.datos);
        }

        function setCapitulo(){
            console.log(control.capitulo);
            control.datos.control.video = control.capitulo.source;
            control.datos.control.accion = 'pause';
            control.videoRef.set(control.datos);
            cambiarFuente(control.capitulo.source);
            control.entrada = false;
        }

        function cambiarFuente(fuente){
            var video = document.getElementById("mobilScreen");

            if(video == " " || video == null || video == ""){
                var source = document.createElement('source');
                video.appendChild(source);	
            }else{
                var source = document.createElement('source');
                video.replaceChild(source, video.childNodes[0]); 
            }

            var finalSource = 'http://myowntv.netau.net/'+fuente;
            source.setAttribute('src', finalSource);
            
            video.load();
        }

        function cambiarPantalla(){
            control.verCapituloEnWeb = !control.verCapituloEnWeb;
        }

    }

}());