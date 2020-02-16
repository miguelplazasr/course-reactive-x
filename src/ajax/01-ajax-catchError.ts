/**
 *
 */
import {ajax, AjaxError} from 'rxjs/ajax';
import {catchError, map, pluck} from 'rxjs/operators';
import {of} from "rxjs";

const url = 'http://api.github.com/users?per_page=5';

const fetchPromesa = fetch(url);

// fetchPromesa
//     .then( resp => resp.json())
//     .then( data => console.log('data -> ', data))
//     .catch( err => console.warn('Error en usuarios', err) )


// manejo de erroes en fetch

const handlerErr = ( response: Response ) => {
    if ( !response.ok) {
        throw new Error( response.statusText)
    }
    return response;
};

const atrapaErr = (err: AjaxError) => {
    console.warn( 'error en -> ', err.message);
    return of({});
};

// fetchPromesa
//     .then( handlerErr )
//     .then( resp => resp.json())
//     .then( data => console.log('data -> ', data))
//     .catch( err => console.warn('Error en usuarios', err) )

ajax( url )
    .pipe(
        // map( resp => resp.response )
        pluck('response'),
        catchError( atrapaErr )
    )
.subscribe( users => console.log('usuarios -> ', users))
