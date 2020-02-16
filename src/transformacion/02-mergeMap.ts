/**
 * MergeMap : emiten el valor de la subscripcion interna
 */
import {ajax, AjaxError} from 'rxjs/ajax';
import {catchError, debounceTime, map, mergeAll, mergeMap, pluck, take, takeUntil} from 'rxjs/operators';
import {fromEvent, interval, Observable, of} from "rxjs";
import {GithubUser, GithubUsersResp} from "../interfaces/github-users";

const letras$ = of('a', 'b', 'c');

letras$
    .pipe(
        mergeMap( (letra) => interval(1000).pipe(
            map( i => letra + i ),
            take(3)
        ))
    )
// .subscribe({
//     next: val => console.log('next -> ', val),
//     complete: () => console.log('Complete')
// })


const mouseDown$ = fromEvent( document, 'mousedown');
const mouseUp$ = fromEvent( document, 'mouseup');
const interval$=  interval();


mouseDown$
    .pipe(
        mergeMap( () => interval$.pipe(
            takeUntil( mouseUp$ )
        ) )
    )
.subscribe(console.log)
