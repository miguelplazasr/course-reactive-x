/**
 * auditTime : emite el ultimo valor que ha sido emitido por el observable en un periodo de tiempo
 */
import {interval, fromEvent} from 'rxjs';
import {auditTime, map, sample, tap} from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>( document, 'click');


click$
    .pipe(
        map(({x}) => x), // destructuracion de objetos
        tap( val => console.log(val)),
        auditTime(2000)
    )
    .subscribe(console.log);

