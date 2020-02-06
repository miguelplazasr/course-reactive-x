import {Observable, Observer} from 'rxjs';


const obs$ = new Observable<string>( subs => {

    subs.next('Hola');
    subs.next('mundo!');

    subs.next('Hola');
    subs.next('mundo!');

    /* Error fozado para ver el callback del error */
    // const valor = undefined;
    // valor.name = 'Miguel';

    subs.complete();

    //Las intrucciones puestas despues del complete, estas no se van a ejecutar porque el subscriber ya finalizo/

    subs.next('Hola');
    subs.next('mundo!');
});

/*
LECCION 13.
 */
// obs$.subscribe( resp => console.log);
// obs$.subscribe( console.log ); //En Emacscript 6 es lo mismo usar de esta forma que en la linea comentada arriba

/*
LECCION 14
 */
// Forma de llamar los callbacks dentro del subscribe. Metodo 1
obs$.subscribe(
    value => console.log('next :', value),
    error => console.warn('error :', error),
    () => console.info('completado')
);

// Metodo 2 : pasarle el objeto observer al subscribe
const observer: Observer<string> = {
    next: value => console.log('[next] -> ', value),
    error: err => console.warn('[error] -> ', err),
    complete: () => console.info('completado [obs]')
};

obs$.subscribe( observer );



