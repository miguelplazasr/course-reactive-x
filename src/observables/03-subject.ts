import {Observable, Observer, Subject} from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next -> ', value),
    error: err => console.warn('error -> ', err),
    complete: () => console.info('completado')
};


const  intervalo$ = new Observable<number>( subs => {

    const intervalId = setInterval(
        () => subs.next( Math.random()), 1000
    );

    return () => {
        clearInterval( intervalId );
        console.log('Intervalo destruido');
    }
});


// const subs1 = intervalo$.subscribe( rdm =>  console.log('subs1 -> ', rdm));
// const subs2 = intervalo$.subscribe( rdm =>  console.log('subs2 -> ', rdm));


/**
 * 1 - Casteo multiple
 * 2 - Tambien es un observer
 * 3 - Next, error y complete
 */
const subject$ = new Subject();

const subscription = intervalo$.subscribe( subject$ );

// const subs1 = subject$.subscribe( rdm =>  console.log('subs1 -> ', rdm));
// const subs2 = subject$.subscribe( rdm =>  console.log('subs2 -> ', rdm));


const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer);

setTimeout( () => {

    // Insertar informacion al flujo de datos
    subject$.next(10);

    subject$.complete();

    subscription.unsubscribe();

}, 3500);
