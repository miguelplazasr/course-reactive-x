/**
 * Ejercicio:
 * El objetivo de es realizar la misma impresión, pero usando observables
 * Nota: NO hay que usar el ciclo "FOR OF", usar un observable y llamar la función capitalizar
 */

import {from, of} from "rxjs";
import {map, mergeAll} from "rxjs/operators";

/**
 * Salida esperada:
 * Batman
 * Joker
 * Doble Cara
 * Pingüino
 * Hiedra Venenosa
 */
(() =>{


    const nombres = ['batman', 'joker', 'doble cara', 'pingüino', 'hiedra venenosa'];

    const capitalizar = (nombre: string) => nombre.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());


    // Cambiar este FOR OF, por un observable y capitalizar las emisiones
    // for( let nombre of nombres ) {
    //     console.log( capitalizar(nombre) )
    // }

    const nombres$ = from( nombres );

    // Solucion
    nombres$
        .pipe(
            map( resp => {
                return ( capitalizar(resp) )
            } ),
        )
        .subscribe(console.log)

    // Recomendada
    nombres$
        .pipe(
            map( capitalizar )
        ).subscribe(console.log)





})();

