let secretNumber=5;
let userNumber=0;


while(secretNumber != userNumber) {

    let userNumber= prompt ("indica un numero del 1 al 10 por favor: ");



    console.log (userNumber);

    if (userNumber == secretNumber) {  
        alert (`Acertaste, Tu numero es: ${userNumber}`);   
    }  else {
        if (userNumber>secretNumber){
            alert(`El numero secreto es menor`)
        } else {
            alert(`el numero secreto es mayor`)
        }
        alert(`Lo siento, no acertaste el numero, el numero verdadero era ${secretNumber}`);
    }

}



























/*
//Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
let weekDay = prompt ("Ingresa el dia de la semana: ")

if (weekDay === "sabado" || weekDay === "domingo") { // el === significa "week day debe ser estrictamente domingo" el || significa un OR
    alert (`Buen fin de semana, me alegro que sea ${weekDay}`)
}
else{
    alert("Buena semana")
}


//Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
let numeroUsuario = prompt("Ingresa un numero")


if (numeroUsuario>0){
    alert (`El numero es positivo, tu numero es ${numeroUsuario}`)
}
    else if(numeroUsuario<0){
        alert (`El numero es negativo`)
    }


//Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".
let puntuacionMinima=100;
let puntuacionUsuario = prompt ("Ingresa tu puntuacion")

if (puntuacionUsuario>100){
    alert (`Ganaste, tu puntuacion es ${puntuacionUsuario}`)
}

else if (puntuacionUsuario <100){
    alert (`Perdiste, la puntuacion minima para ganar era ${puntuacionMinima}`)
}


//Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
let nombreUsuario=prompt ("Ingresa tu nombre")

alert (`Tu nombre esmm} ${nombreUsuario}`)


*/


