/**
 * tap : dispara efectos secundarios, nos permite como fluye la informacion , aparentemente es solo informativo por ejemplo imprimir en consola
 */
import { range} from 'rxjs';
import { map, tap} from 'rxjs/operators';

const numeros$ = range( 1, 5);

numeros$.pipe(
    tap( x => {
            console.log('antes ->', x);
            return 100; // el tap no necesita return y si se pone no se tiene en cuenta
        }),
    map( value => value * 10 ),
    tap( {
        next: value => console.log('despues -> ', value),
        complete: () => console.log('finalizo ')
    })
)
    .subscribe(  value => console.log('subs -> ', value) );






