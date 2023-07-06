function obtenerJugadaComputadora(){

    let jugada= ["piedra", "papel", "tijeras"]

    
    return jugada[Math.floor(Math.random() * 100) % 3] ; 
}


function obtenerJugadaUsuario(){

    const readlineSync= require('readline-sync');     

    return readlineSync.question("Ingrese 'piedra', 'papel' o 'tijeras': ");
}

function determinarGanador(jugadaComputadora, jugadaUsuario){

     if(jugadaComputadora== "piedra" && jugadaUsuario=="tijeras"){

        return "Gana la computadora";
     }else if(jugadaComputadora== "papel" && jugadaUsuario=="piedra"){

        return "Gana la computadora";
     }
      else if(jugadaComputadora== "tijeras" && jugadaUsuario=="papel"){
        
        return "Gana la computadora";

     } else if(jugadaComputadora==jugadaUsuario){

        return "Empate";
     }else{

        return "Gana el usuario";
     }

}

let jugadaComputadora= obtenerJugadaComputadora();
let jugadaUsuario= obtenerJugadaUsuario();
let resultadoJuego= determinarGanador(jugadaComputadora,jugadaUsuario)

console.log("La computadora eligio: " + jugadaComputadora + ".");

console.log("El usuario eligio: " + jugadaUsuario + ".");

console.log("El resultado fue: " + resultadoJuego + ".");

