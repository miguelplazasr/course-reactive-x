/**
 * scan : es igual que el reduce con la diferencia que  cuando los valores son emitidos por el obser inmediatamente van saliendo. A diferencia q el reduce q emite el valor al finalizar el observable
 */
import {from} from 'rxjs';
import {map, reduce, scan} from 'rxjs/operators';

const numeros = [1,2,3,4,5];

// const totalAcumulador = ( acc, cur ) => {
//     return acc + cur
// };

const totalAcumulador = ( acc, cur ) => acc + cur;

// reduce

from( numeros )
    .pipe(
        reduce( totalAcumulador, 0 )
    )
.subscribe( console.log );

// Scan

from( numeros )
.pipe(
    scan( totalAcumulador, 0)
)
.subscribe( console.log );


// Scan puede ser la base del patron Redux
interface IUsuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number;

}
const user: IUsuario[] = [
    { id: 'mepr', autenticado: false, token: null },
    { id: 'mepr', autenticado: true, token: 'ABC' },
    { id: 'mepr', autenticado: true, token: 'ABC123' },
];

const state$ = from( user )
    .pipe(
        scan<IUsuario>( ( acc, cur ) => {
            return { ...acc, ...cur }
        }, { edad: 33 })
    );

const id$ = state$.pipe(
    map( state  => state )
);

id$.subscribe( console.log );
