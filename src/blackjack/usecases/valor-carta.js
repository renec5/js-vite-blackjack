
/**
 * Esta funcion devuelve el valor de la Carta
 * @param {String} carta Es el nombre de la carta a la cual le vamos a sacar el valor
 * @returns {Number} El valor de la carta Ejemplo: si la carta es un 2C devolvera 2
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}