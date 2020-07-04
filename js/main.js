(() => {
	console.log('fired');

	let audioControls = document.querySelectorAll(".controls"), //Aquí estoy invocando los botones y allá abajo es donde
	    audio = document.querySelector('audio');               //los especifico uno por uno [0,1,2,].

	    function playAudio() {
	    	// play the audio track
	    	audio.play();
	    }

	    function rewindAudio() {
	    	//rewind the audio track 
	    	audio.pause();            //<------Es una funcion porque tiene los brackets ahí
	    	audio.currentTime = 0;    //<------Es una caracteristica del elemento, lo está describiendo
	    	//debugger;
	    }
      //Aqui estamos especificando a que elmento se le añade la funcion de debugger, porloque tiene la misma clase
     //los dos botones, entonces toca especificar a que elemento se le añadio esa funcion.

	    audioControls[0].addEventListener("click", playAudio);
	    audioControls[1].addEventListener("click", rewindAudio);
})();