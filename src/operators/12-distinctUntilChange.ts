/**
 * distinctUntilChange : emite valores siempre y cuando la emision anterior no es la mismo
 */
import {from, of} from 'rxjs';
import {distinct, distinctUntilChanged} from 'rxjs/operators';

const observer = {
    next: value => console.log('[next] -> ', value),
    complete: () => console.info('completado [obs]')
};

const numeros$ = of<number|string>( 1,'1',1,1,3,3,2,4,4,5,3,1,'1');

numeros$
    .pipe(
        distinctUntilChanged() // utiliza el ===
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
        nombre: 'Megaman'
    },
    {
        nombre: 'X'
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
        distinctUntilChanged( (ant, act) => ant.nombre === act.nombre )
    )
    .subscribe(console.log);
