import _ from 'underscore';

/**
 *  Esta función crea un nuevo deck
 * @param {Array<String>} tiposCartas Ejemplo ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} devuelve un nuevo deck de cartas
 */
export const crearDeck = (tiposCartas, tiposEspeciales) => {

    let deck = [];
    if (!tiposCartas || tiposEspeciales.length === 0) throw new Error("tiposCartas y tiposEspeciales son obligatorios como un arreglo de strings");
 
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}

// export default crearDeck;
