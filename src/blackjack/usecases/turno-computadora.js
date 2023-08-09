import { pedirCarta,valorCarta, crearCarta } from "../usecases/index";


/**
 * 
 * @param {Number} puntosMinimos son los puntos del jugador que tienen que ser igualados o superados para ganar
 * @param {Array<String>} deck Arreglo de cartas con el nuevo deck
 * @param {puntosComputadora} puntosHTML Puntos de la computadora
 * @param {HTMLImageElement} divCartasComputadora Elemento HTML en el cual se van a dibujar las cartas
 */

export const turnoComputadora = ( puntosMinimos, deck, puntosHTML, divCartasComputadora ) => {
    let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearCarta(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}