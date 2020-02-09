/**
 * from : crea observable con la estrucutra de array, promise , iterable, observable
 */

import { of, from } from 'rxjs';

const observer = {
    next: val => console.log('next -> ', val ),
    complete: () => console.log('Completado')
};


const srcfrom$ = from( [1,2,3,4,5] );
const srcOf$ = of( ...[1,2,3,4,5] );

// const srcfrom$ = from( 'Miguel' ); // Emite cada uno de los caracteres del string
// const srcOf$ = of( 'Miguel' );

srcfrom$.subscribe( observer );
srcOf$.subscribe( observer );


/**
 * Usar fetch para consumir apis
 */
const source$ = from( fetch('https://api.github.com/users/miguelplazasr'));

source$.subscribe( observer );


source$.subscribe( async  (resp) => {
    console.log( resp );

    const dataResp = await resp.json();
    console.log( dataResp );

});


const miGenerador = function* () {

    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;

};

const miIterable = miGenerador();


for ( let id of miIterable ) {
    console.log(id);
}

from( miIterable ).subscribe( observer );
