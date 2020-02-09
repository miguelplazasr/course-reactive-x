/**
 * map transforna lo q emite el observable
 *
 * Los operadores debe estar dentro del pipe
 */

import {fromEvent, range} from 'rxjs';
import {map, mapTo, pluck} from "rxjs/operators";

// * Los operadores debe estar dentro del pipe
// <number, number> primero, lo q recibe y segundo lo que retorna
range(1, 5).pipe(
    map<number, number>( x => x * 10)
)
    .subscribe( console.log );

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup');

const keyupCode$ = keyup$.pipe(
    map(event => event.code )
);

keyup$.subscribe( val => console.log( 'map -> ', val.code));

keyupCode$.subscribe( val => console.log( 'map -> ', val));

/**
 * pluck para extraer un valor del objeto y q ese sea la salida del observable
 *
 */

const keyupPluck$ = keyup$.pipe(
    pluck('key')
);

keyup$.subscribe( console.log );
keyupPluck$.subscribe( val => console.log( 'pluck -> ', val));

/**
 * con el pluck tambien puedo obtener propieadades dentro de objetos
 */
const keyupPluckN$ = keyup$.pipe(
    pluck('target', 'baseURI')
);

keyupPluckN$.subscribe( val => console.log( 'pluck anidado -> ', val));


/**
 * mapTo : transforma la entrada en una salida especifica
 */

const mapTo$ = keyup$.pipe(
    mapTo('tecla presionada')
);
mapTo$.subscribe( val => console.log( 'mapTo anidado -> ', val));
