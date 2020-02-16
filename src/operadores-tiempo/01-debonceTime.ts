/**
 * debonceTIme : podamos contar en milesimas de segundo desde la ultima emision
 */
import {fromEvent} from 'rxjs';
import {debounceTime, distinctUntilChanged, pluck} from 'rxjs/operators';

const observer = {
    next: value => console.log('[next] -> ', value),
    complete: () => console.info('completado [obs]')
};

const click$ = fromEvent( document, 'click' );

click$
    .pipe(
        debounceTime( 3000 )
    );//.subscribe(console.log);

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent( input, 'keyup');

input$
    .pipe(
        debounceTime( 1000 ),
        pluck( 'target', 'value' ),
        distinctUntilChanged()

    )
.subscribe(console.log);
