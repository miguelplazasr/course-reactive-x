/**
 * takeWhile : recibe valores miestras se cumple la condicion
 */
import {fromEvent, Observer} from 'rxjs';
import {map, takeWhile} from 'rxjs/operators';

const observer = {
    next: value => console.log('[next] -> ', value),
    complete: () => console.info('completado [obs]')
};

const click$ = fromEvent<MouseEvent>( document, 'click');

click$
    .pipe(
        map( ({ x, y }) => ({ x, y })),
        // takeWhile( ({ y }) => y <= 150),

        // el true al final dice que incluya el ultimo valor que fue emitido
        takeWhile( ({ y }) => y <= 150, true),
    )
    .subscribe( observer );
