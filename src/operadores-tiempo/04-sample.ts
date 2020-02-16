/**
 * sample : emite el ultimo vlr emitido por un observablo antes de que el observable dentro de sample emita valores
 */
import {interval} from 'rxjs';
import {sample} from 'rxjs/operators';
import {fromEvent} from "rxjs";
import {map} from "rxjs/operators";

const interval$ = interval( 5000 );
const click$ = fromEvent<MouseEvent>( document, 'click');


interval$
    .pipe(
        sample( click$ ) // El interval$ no se emite hasta q se de click
    )
    .subscribe(console.log);

