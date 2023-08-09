
/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck este es el arreglo de cartas de donde se van a ir pidiendo para jugar 
 * @returns {String} Regresa la carta que se pidio Ejemplo: 2C ó 3H etc...
 */
export const pedirCarta = ( deck ) => {
 
    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}

