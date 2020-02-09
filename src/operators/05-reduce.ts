/**
 * reduce : Aplica una funcion acumuladora a las emisiones provenientes del observable
 */
import {interval} from 'rxjs';
import {reduce, take, tap} from 'rxjs/operators';


// reduce en javascript

const numbers = [1,2,3,4,5];

const totalReducer = ( acumulador: number, actual: number ) => {
    return acumulador + actual;
};

const total = numbers.reduce( totalReducer, 0 ); // el 0 es el valor inicial

console.log( 'total arr -> ',  total);


// reduce en rxjs

interval(500)
    .pipe(
        take( 6), // completa el observable despues de la cantidad de veces que se especifiquen en el take
        tap( console.log ),
        reduce( totalReducer )
    )
    .subscribe( {
        next: value => console.log('next -> ', value),
        complete: () => console.log('Completado ')

    } )
