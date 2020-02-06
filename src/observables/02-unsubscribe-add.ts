import {Observable, Observer} from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next -> ', value),
    error: err => console.warn('error -> ', err),
    complete: () => console.info('completado')
};

const intervalo$ = new Observable<number>(subscriber => {

    //crear contador
    let count: number = 0;

    const interval = setInterval(() => {

        count++;
        subscriber.next(count);
        console.log( count );

    }, 1000);

    setTimeout(() => {
        subscriber.complete();
    }, 2500);

    /* Este return es la funcion que se ejecuta cuando se hace el llamado al Unsubscribe.  */
    return () => {
        clearInterval( interval );
        console.log( 'Intervalo destruido.');
    }


});

const subs1 = intervalo$.subscribe( observer );
const subs2 = intervalo$.subscribe( observer );
const subs3 = intervalo$.subscribe( observer );


setTimeout(() => {
    subs1.unsubscribe();
    subs2.unsubscribe();
    subs3.unsubscribe();

    console.log('Completado el timeout.');
}, 3000);


/*
* LECCION 17 . Observables en cadena
* */

subs1.add( subs2 )
    .add( subs3 );

setTimeout(() => {
    // Solo es necesario hacer hacer el unsubscribe del primero ya que los demas estan anidados
    subs1.unsubscribe();

    console.log('Completado el timeout de subscribes en cadena.');
}, 5000);
