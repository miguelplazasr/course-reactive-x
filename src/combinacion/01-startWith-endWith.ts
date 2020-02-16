/**
 * starWith : enviar cualquier argumento antes de que el observable emita
 */
import {fromEvent, of} from "rxjs";
import {catchError, endWith, exhaustMap, map, mergeMap, pluck, startWith, switchMap, tap} from "rxjs/operators";
import {ajax} from "rxjs/ajax";

const numeros$ = of(1,2,3).pipe(
    startWith('a', 'b', 'c'),
    endWith('x', 'y', 'z')
);


numeros$.subscribe(console.log)
