/**
 * Range : Crea un observable que emite una secuencia de numeros econ base en un rango, por defecto es sincrono pero se puede transformar a asincrono con el Scheduler
 */

import {asyncScheduler, of, range} from 'rxjs';

const src$ = of(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);

/**
 * Si la funcion es sincrona, deberia apracer el Inicio, luego los numeros y al final el Fin
 *
  */
console.log( ' inicio ');
src$.subscribe( console.log);
console.log( ' fin ');


const src1$ = range(1,5);

src1$.subscribe( console.log );

/**
 * con el asyncScheduler podemos convertir el observable en asincrono
 */
const src2$ = range(1,5, asyncScheduler);

console.log( ' inicio ');
src2$.subscribe( console.log);
console.log( ' fin ');
