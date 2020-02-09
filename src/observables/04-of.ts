import { of } from 'rxjs';

/**
 * Recorre una lista de argumentos que se le pasan
 */

// Los dos obs$ hacen lo mismo a pesar que elsegundo es un array
// const obs$ = of(1,2,3,4,5,6 );
// const obs$ = of(...[1,2,3,4,5,6] );
const obs$ = of([1,2], {a:1, b:2}, true, function (){}, Promise.resolve(true) );

console.log('Inicio del observable');

obs$.subscribe(
    next => console.log('next -> ', next),
    null,
    () => console.log('Terminamos la secuencia')
    );


console.log('Fin del observable');
