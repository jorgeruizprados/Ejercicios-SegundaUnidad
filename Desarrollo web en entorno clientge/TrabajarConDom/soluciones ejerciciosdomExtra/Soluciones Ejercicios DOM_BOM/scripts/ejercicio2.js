var tablero = [0, 0, 0, 0, 0, 0, 0, 0, 0, ];
var turnoJugador = 1;
var jugadores = ["Jugador 1", "Jugador2"];
var partidaEmpezada = false;

/**
 * Función par aalmacenar los nombres introducidos para los jugadores y habilitar el tablero de juego
 */
function guardarJugadores() {
    jugadores[0] = document.getElementById("jugador1").value;
    jugadores[1] = document.getElementById("jugador1").value;
    partidaEmpezada = true;
}

/**
 * Función que recibe el número de celda que se ha seleccionado y que realiza las siguientes acciones:
 * comprueba que la partida esté empezada.
 * Alamcen el jugador(1 o 2) que haya seleccionado la celda.
 * tras la llamada a la función que pinta la celda, llama al método que comprueba si ya hay ganador.
 * En caso de que haya terminado la partida muestra un mensaje informativo.
 * @param {*} numCelda 
 */
function seleccionarCelda(numCelda) {
    if (partidaEmpezada) {
        if (tablero[numCelda] == 0) {
            if (turnoJugador == 1) {
                tablero[numCelda] = 1;
                turnoJugador = 2;
            } else {
                tablero[numCelda] = 2;
                turnoJugador = 1;
            }
        } else {
            alert("Celda ya seleccionada, escoge otra");
        }
        pintarCeldaSeleccionada(numCelda);
        let jugadorGanador = comprobarGanador();
        switch (jugadorGanador) {
            case 1:
                alert("Ha ganado " + jugadores[0]);
                break;
            case 2:
                alert("Ha ganado " + jugadores[1]);
                break;
            case 3:
                alert("¡Empate!");
                break;
        }
    }
}

/**
 * Fución que pinta la celda, pasada como parámetro, de verde para el jugador 1 y de azul para el 2
 * @param {*} numCelda 
 */
function pintarCeldaSeleccionada(numCelda) {
    if (tablero[numCelda] == 1) {
        document.getElementById("c" + numCelda).classList.add("celdaVerde");
    } else {
        document.getElementById("c" + numCelda).classList.add("celdaAzul");
    }
}

/**
 * Función que recorre el array que simula el tablero y comprueba si alguna línea, columna o diagonal ha sido seleccionada por el mismo jugador
 * Devuelve el número asociado al jugador ganador, en caso de que lo haya, el núemro 3 en caso de empate y el número 0 en cualquier otro caso.
 */
function comprobarGanador() {
    var numEspacios = 0;
    for (i = 0; i < 9; i++) {
        if (tablero[i] == 0) numEspacios++;
    }
    // Las líneas horizontales
    if (tablero[0] == tablero[1] && tablero[1] == tablero[2] && tablero[0] != 0) return tablero[0];
    if (tablero[3] == tablero[4] && tablero[4] == tablero[5] && tablero[3] != 0) return tablero[3];
    if (tablero[6] == tablero[7] && tablero[7] == tablero[8] && tablero[6] != 0) return tablero[6];
    //Las líneas verticales
    if (tablero[0] == tablero[3] && tablero[3] == tablero[6] && tablero[0] != 0) return tablero[0];
    if (tablero[1] == tablero[4] && tablero[4] == tablero[7] && tablero[1] != 0) return tablero[1];
    if (tablero[2] == tablero[5] && tablero[5] == tablero[8] && tablero[2] != 0) return tablero[2];
    //Las diagonales
    if (tablero[0] == tablero[4] && tablero[4] == tablero[8] && tablero[0] != 0) return tablero[0];
    if (tablero[2] == tablero[4] && tablero[4] == tablero[6] && tablero[2] != 0) return tablero[2];

    if (numEspacios > 0) {
        return 0;
    } else {
        return 3;
    }
}