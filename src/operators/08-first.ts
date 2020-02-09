/**
 * first : solo devielve el primer valor
 */
import {fromEvent} from 'rxjs';
import {first, map, take, tap} from 'rxjs/operators';


const click$ = fromEvent<MouseEvent>( document, 'click');

/**
 * En este ejemplo el first se dispara cuando se hace el click en el eje Y cuando este sea mayor o igual a 150 px
 */
click$
    .pipe(
        tap<MouseEvent>( () => console.log('tap')),
        // map( event => ({
        //     clientY: event.clientY,
        //     clientX: event.clientX
        // }) ),
        map( ({ clientX, clientY }) => ({ clientX, clientY }) ),
        first( event => event.clientY >= 150 )
    )
    .subscribe( {
    next: value => console.log('valor ->', value),
    complete: () => console.log('Completado ')
} );


