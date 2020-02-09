import { fromEvent } from 'rxjs';

/**
 *  fromEvent: permite crear observables con base a un EventTarget.
 *
 *  fromEvent<Event>(document, 'scroll'); Para este caso el eventTarget es el document,
 *  y solo me interesa saber los que tienen que ver con el scroll
 *
 */


const src1$ = fromEvent<MouseEvent>( document, 'click' );
const src2$ = fromEvent<KeyboardEvent>( document, 'keyup' );


const observer = {
    next: val => console.log('next -> ', val)
};


// De esta forma se puede optener las coordenadas x, y del mouse pero la opcion de destructuracion de objetos es mucho mejor
src1$.subscribe( ev => {
    console.log( ev.x );
    console.log( ev.y );
} );

// Metodo de destructuracion

src1$.subscribe( ( {x, y}) => {
    console.log( x, y );
});


src2$.subscribe( evento => {
    console.log( evento.key )
} );

