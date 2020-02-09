/**
 * scan : competa el observable asi no haya terminado tomando el numero del take. Cancela la ejecucion del Observable
 */
import {of} from 'rxjs';
import {take, tap} from 'rxjs/operators';

const numeros$ = of(1,2,3,4,5)
    .pipe(
        tap(console.log )
    );

numeros$
    .pipe(
        tap( t => console.log('tap -> ', t ) ),
        take( 3 ) // Take puede usarse en llamadas a servicios http para que lo haga una sola vez y termine la ejecucion del Observable, asi nos aseguramos de liberar memoria
    )
    .subscribe({
    next: value => console.log('value ->', value),
    complete: () => console.log('complete'),
});

