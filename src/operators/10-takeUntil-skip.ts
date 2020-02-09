/**
 * takeUntil : recibe como valor otro Observable
 * skip : omitir x cantidad de emisiones iniciales
 */
import {fromEvent, interval, Observer} from 'rxjs';
import {map, skip, takeUntil, takeWhile, tap} from 'rxjs/operators';

const observer = {
    next: value => console.log('[next] -> ', value),
    complete: () => console.info('completado [obs]')
};

const boton = document.createElement('button');
boton.innerHTML = 'Datenr Timer';

document.querySelector('body').append(boton);


const counter$ = interval(1000);
// const clickBtn$ = fromEvent( boton, 'click' );
const clickBtn$ = fromEvent(boton, 'click').pipe(
    tap(() => console.log('Tap antes del skip')),
    skip(1),
    tap(() => console.log('Tap despues del skip'))
);

counter$
    .pipe(
        takeUntil(clickBtn$)
    )
    .subscribe(observer);
