
let palabraVeces = "vez";
let secretNumber=5;
let userNumber=0;
let intentos = 1;
while(secretNumber != userNumber) {

    let userNumber= prompt ("indica un numero del 1 al 10 por favor: ");
    console.log (userNumber);
    if (userNumber == secretNumber) {  
        alert (`Acertaste, Tu numero es: ${userNumber}, Lo hiciste en: ${intentos} ${palabraVeces}`);   
    }  else {
        if (userNumber>secretNumber){
            alert(`El numero secreto es menor`);
        } else {
            alert(`el numero secreto es mayor`);
        }
        //incrementamos el contador cuando no se acierta el numero
        intentos = intentos + 1;
        palabraVeces='veces'
        //alert(`Lo siento, no acertaste el numero, el numero verdadero era ${secretNumber}`);
    }

}
























//--------------------------Ejercicios------------------------------
/*
BUCLES
-- Pide al usuario que ingrese un número
let numeroUsuario = parseInt(prompt("Ingresa un número hasta el cual deseas contar:"));

/ Inicializa el contador en 0
let contador = 0;
/ Bucle while que cuenta desde 0 hasta el número ingresado por el usuario
while (contador <= numeroUsuario) {
    alert(contador);  // Muestra el valor del contador en la consola
    contador++;  // Incrementa el contador en 1
}



--Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.

let contador = 0;
let edadContador= 0;
let estaturaContador=1;
while (estaturaContador!=edadContador){
    edadContador= prompt ("Ingresa tu edad");
    estaturaContador = prompt("Ingresa tu estatura");
    contador = contador + 1;
    alert (`Gracias, tu numero de intentos es ${contador}`);
    
}


--Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
let contador = 10;
let edadContador= 0;
let estaturaContador=0;
let contadorActivador=10;
while (contadorActivador=10){
    contador = contador - 1;
    alert (`Gracias, tu numero de intentos es: ${contador}`) ;
    if (contador<=0){
        break
    }
}

--------------------Cierre bucles---------------------------------



--Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".

let weekDay = prompt ("Ingresa el dia de la semana: ")
if (weekDay === "sabado" || weekDay === "domingo") { // el === significa "week day debe ser estrictamente domingo" el || significa un OR
    alert (`Buen fin de semana, me alegro que sea ${weekDay}`)
}
else{
    alert("Buena semana")
}


--Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.

let numeroUsuario = prompt("Ingresa un numero")
if (numeroUsuario>0){
    alert (`El numero es positivo, tu numero es ${numeroUsuario}`)
}
    else if(numeroUsuario<0){
        alert (`El numero es negativo`)
    }
    
--Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".

let puntuacionMinima=100;
let puntuacionUsuario = prompt ("Ingresa tu puntuacion")

if (puntuacionUsuario>100){
    alert (`Ganaste, tu puntuacion es ${puntuacionUsuario}`)
}
else if (puntuacionUsuario <100){
    alert (`Perdiste, la puntuacion minima para ganar era ${puntuacionMinima}`)
}


-//Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
let nombreUsuario=prompt ("Ingresa tu nombre")
alert (`Tu nombre es} ${nombreUsuario}`)
*/


