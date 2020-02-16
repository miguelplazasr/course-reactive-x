/**
 * starWith : enviar cualquier argumento antes de que el observable emita
 */
import {interval, concat, of} from "rxjs";
import {startWith, take} from "rxjs/operators";
import {ajax} from "rxjs/ajax";


const interval$ = interval(1000);

concat(
    interval$.pipe(take(3)),
    interval$.pipe(take(2)),
    of(1),
    [1,2,3,4]
).subscribe(console.log)
