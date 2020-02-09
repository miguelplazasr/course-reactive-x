/**
 * Observables de intervalos de tiempo y son asincronos por naturaleza
 *
 * interval(1000) : emision en milisegundos
 * timer(2000) : emite el primer valor en 2000 milisegundos
 */

import {interval, Observable, timer} from 'rxjs';

const observer = {
    next: val => console.log('next -> ', val ),
    complete: () => console.log('complete'),
};

const interval$ = interval( 1000 );

console.log('Inicio');
// interval$.subscribe( observer );
console.log('Fin');

// timer, se ejecuta a los dos segundos y luego se completa

const timer$ = timer( 2000 );

console.log('Inicio');
// timer$.subscribe( observer );
console.log('Fin');

/**
 * Configuraciones del timer
 *
 * timer( 2000, 1000 ) => De esta forma el timer reacciona como un interval que inicia a los 2 segundos y emite cada segundo sin llegar a completarse
 */

const timerCfg$ = timer( 2000, 1000 );

// timerCfg$.subscribe( observer );


// tambien se puede programar la emision del timer()

const hoyEn5 = new Date();
hoyEn5.setSeconds( hoyEn5.getSeconds() + 5 );

const timerCfg1$ = timer( hoyEn5 );

timerCfg1$.subscribe( observer );
