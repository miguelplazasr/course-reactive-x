/**
 * distinct : deja pasar los valores que no has sido previamente emitidos
 */
import {from, of} from 'rxjs';
import {distinct} from 'rxjs/operators';

const observer = {
    next: value => console.log('[next] -> ', value),
    complete: () => console.info('completado [obs]')
};

const numeros$ = of<number|string>( 1,1,1,3,3,'1',2,4,4,5,3,1);

numeros$
    .pipe(
        distinct() // utiliza el ===
    )
    .subscribe(console.log );

interface Personaje {
    nombre: string;
}

const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr. Willy'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },
];

from( personajes )
    .pipe(
        distinct( p => p.nombre )
    )
    .subscribe(console.log);
