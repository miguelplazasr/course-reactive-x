/**
 * distinctUntilKeyChange : emite valores siempre y cuando la emision anterior no es la mismo, el mismo concepto que el distinctUntilChange , usado con objetos
 */
import { from } from 'rxjs';
import { distinctUntilKeyChanged } from 'rxjs/operators';

const observer = {
    next: value => console.log('[next] -> ', value),
    complete: () => console.info('completado [obs]')
};


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
        distinctUntilKeyChanged( 'nombre' )
    )
    .subscribe(console.log);
