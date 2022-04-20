alert('Hola, pai. Meta un número del uno al cien, ahí le damos una pista pa que la tenga en cuenta. IMPORTANTE: tenes seis oportunidades mor.')



var aleatoreo = (minimo, maximo) => Math.floor(Math.random()*(maximo - minimo)+minimo);
var numeroAleatoreo = Math.floor(aleatoreo(1,100));

var boton 			= 	document.getElementById('boton'),
	miInput 		= 	document.getElementById('barraInsertadora'),
	dato			=	boton.addEventListener('click',valor),
	pistaPantalla	=	boton.addEventListener('click',pista),
	divPista 		=	document.querySelector('#divDePista'),
	datosMetidosPorElJugadors = document.getElementById('datosMetidosPorElJugadors'),
	espacioDelBoton =	document.getElementById('espacioParaBoton'),
	espacioParaContadorDeParrafosCreados = document.getElementById('espacioParaContadorDeParrafosCreados'),
	contadorDeIntentos	= 	0;

 	function valor(){
 	contadorDeIntentos++;
	
	if(contadorDeIntentos == 6){
		boton.disabled = true;

		boton.style.backgroundColor = "#dd17175c"
		boton.style.borderColor = "rgb(255, 0, 0)";

		function intentosCompletados() { 
	    let creacionDeParrafo = document.createElement("p");
    	let textoParaMostrar = document.createTextNode('mi vida ;( se te acabaron los intentos... que pesar! Vuelve y juega otra vez mor, tú puedes!');

    	creacionDeParrafo.appendChild(textoParaMostrar); 
	    datosMetidosPorElJugadors.appendChild(creacionDeParrafo); 

	    let colorTextoDeReintentar = creacionDeParrafo.classList.add('colorTextoDeReintentar');
		
	    let botonParaReniciar = document.createElement('BUTTON');
		let textoDeBotonMor	  = document.createTextNode('Intentalo de nuevo, tu puedes');
		
		//crea una funcion que le mete al boton una funcion para recargar la pag.
		let refrescarPagConBoton = espacioDelBoton.addEventListener('click', function refrescar(){location.reload();})

			botonParaReniciar.appendChild(textoDeBotonMor);
			espacioDelBoton.appendChild(botonParaReniciar);
		let nuevaClase = botonParaReniciar.classList.add("botonFinalDeOportunidades");
		};

		return intentosCompletados();

	}  else if(numeroAleatoreo == miInput.value){
			boton.disabled = true;

			let crearOtroParrafoParaPracticar = document.createElement('p');
			let textoQueQuieroMostrar 		  =	document.createTextNode('papi(o mami) usted es el mejor, no sé como lo haces. Un dia de estos me enseñas a ser el mejor, saludos a la familia.')
			
			let claseCreadaGanar = crearOtroParrafoParaPracticar.classList.add("parrafoGanar");

			crearOtroParrafoParaPracticar.appendChild(textoQueQuieroMostrar);
			datosMetidosPorElJugadors.appendChild(crearOtroParrafoParaPracticar);

			let botonParaReniciar = document.createElement('BUTTON')
			let textoDeBotonMor	  = document.createTextNode('Juegue de nuevo mijx');

			botonParaReniciar.appendChild(textoDeBotonMor);
			espacioDelBoton.appendChild(botonParaReniciar);

			let botonGanarJuego = botonParaReniciar.classList.add('botonGanar');

			let reiniciarJuegoGanado = botonParaReniciar.addEventListener('click', function JuegoGanadoRecargar(){location.reload();})
		};




	function mostradorDeNumerosMetidos() {
 	    let crearParrafo 		= document.createElement("p");
       	let valorMetidoEnInput 	= document.createTextNode(miInput.value);
    	let tableroContadorIntentos = document.createElement('h2');
    	let contadorDeParrfosIntentos = document.getElementsByClassName('parrafoCreadoDeValorMetido').length += 1; 

       	crearParrafo.appendChild(valorMetidoEnInput);
	    datosMetidosPorElJugadors.appendChild(crearParrafo);

	    let claseNuevaParaParrafo = crearParrafo.classList.add('parrafoCreadoDeValorMetido');
 		let claseCreadaDeNumeroDeIntentos = tableroContadorIntentos.classList.add('tableroClaseCreada')

 		tableroContadorIntentos.innerHTML = contadorDeParrfosIntentos;
		espacioParaContadorDeParrafosCreados.appendChild(tableroContadorIntentos); 		
	}

   	return mostradorDeNumerosMetidos();
};


 if(numeroAleatoreo >= 50){
 	console.log(numeroAleatoreo);
 	divPista.innerHTML = 'es un número mayor que 50';
 }else{
 	console.log(numeroAleatoreo);
 	divPista.innerHTML = 'es un número menor que 50';
 };
function pista(){
if (miInput.value > numeroAleatoreo) {divPista.innerHTML = 'es un numero mas pequeño bb';}
	else if(miInput.value < numeroAleatoreo){divPista.innerHTML = 'es un número mas granedesito mor';}
};
