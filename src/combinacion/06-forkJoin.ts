/**
 * starWith : enviar cualquier argumento antes de que el observable emita
 */
import {combineLatest, forkJoin, fromEvent, interval, merge, of} from "rxjs";
import {delay, pluck, startWith, take} from "rxjs/operators";
import {ajax} from "rxjs/ajax";


const numeros$ = of(1,2,3,4);
const intervalo$ = interval(1000).pipe(take(3));
const letras$ = of('a','b','c').pipe( delay(3500));

const obs$ = forkJoin(
    numeros$,
    intervalo$,
    letras$
);

obs$.subscribe(console.log);

obs$.subscribe( resp => {
    console.log('numeros -> ', resp[0]);
    console.log('intervalo -> ', resp[1]);
    console.log('letras -> ', resp[2]);
})

//opcion 2, pasando los observables como objetos

const obj$ = forkJoin({
        numeros$,
        intervalo$,
        letras$
}
);

obj$.subscribe(console.log);
