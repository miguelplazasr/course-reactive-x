/**
 * throttleTime : parecido al debounceTime , pero ignora todas las emisiones durante el tiempo qeu se determine
 */
import {asyncScheduler, fromEvent} from 'rxjs';
import { distinctUntilChanged, pluck, throttleTime} from 'rxjs/operators';

const observer = {
    next: value => console.log('[next] -> ', value),
    complete: () => console.info('completado [obs]')
};

const click$ = fromEvent( document, 'click' );

click$
    .pipe(
        throttleTime( 3000 )
    );
    //.subscribe(console.log);

// Ejemplo 2
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent( input, 'keyup');

input$
    .pipe(
        throttleTime( 1000, asyncScheduler, {
            leading: false, // el primer elemento
            trailing: true //el ultimo elemento
        } ),
        pluck( 'target', 'value' ),
        distinctUntilChanged()

    )
    .subscribe(console.log);
