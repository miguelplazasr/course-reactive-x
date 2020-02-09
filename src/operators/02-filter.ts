/**
 * filter : filtra los datos q emite el observable
 */
import {from, fromEvent, of, range} from "rxjs";
import {filter, map} from 'rxjs/operators'

range(1,10).pipe(
    filter( value => value % 2 === 1 )
).subscribe( console.log );


range(20,30).pipe(
    filter( (value, i ) => {
        console.log( 'index -> ', i );
        return value % 2 === 1;

    } )
).subscribe( console.log );


// Ejercicio

interface IPersonaje {
    tipo: string;
    nombre: string;
}

const personajes: IPersonaje[] = [
    {
        tipo: 'heroe',
        nombre: 'batman'
    },
    {
        tipo: 'heroe',
        nombre: 'Robin'
    },
    {
        tipo: 'villano',
        nombre: 'joker'
    }
];

const personajes$ = from( personajes )
    .pipe(
        filter( x => x.tipo === 'heroe')
    );


personajes$.subscribe( console.log );


/**
 * Operadores encadenados
 *
 * Los operadores se ejecutan en el orden que se escriben
 *
 */
const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup')
    .pipe(
        map( event => event.code ), //<KeyboardEvent, string>
        filter( key => key === 'Enter' )
    );

keyup$.subscribe( console.log );
