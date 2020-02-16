/**
 * starWith : enviar cualquier argumento antes de que el observable emita
 */
import {fromEvent, interval, merge} from "rxjs";
import {pluck, startWith, take} from "rxjs/operators";
import {ajax} from "rxjs/ajax";


const interval$ = interval(1000);
const keyup$ = fromEvent( document, 'keyup');
const click$ = fromEvent( document, 'click');

merge(
    keyup$.pipe( pluck( 'type')),
    click$.pipe( pluck( 'type'))
).subscribe(console.log)

