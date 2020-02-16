/**
 *
 */
import {fromEvent, Observable, of} from "rxjs";
import {catchError, debounceTime, map, mergeAll, pluck} from 'rxjs/operators';
import {ajax, AjaxError} from 'rxjs/ajax';
import {GithubUser, GithubUsersResp} from "../interfaces/github-users";

const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body.append( textInput, orderList );

// Helpers
const mostrarUsuarios = ( usuarios: GithubUser[] ) => {

    orderList.innerHTML = '';

    for ( const usuario of usuarios ) {

        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor = document.createElement('a');
        anchor.href = usuario.html_url;
        anchor.text = 'Ver pagina';
        anchor.target = '_blanc';

        li.append( img );
        li.append( usuario.login + ' ');
        li.append( anchor );

        orderList.append( li );
    }
}


/**
 * De esta forma el observable emite otro observable y el codigo se va complicando
 */
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup' );

input$
    .pipe(
        debounceTime( 500 ),
        map( event => {
            const text = event.target['value'];

            return ajax.getJSON(
                `https://api.github.com/search/users?q=${ text }`
            );
        })
    )
    // .subscribe( resp => {
    //     resp.pipe(
    //         // pluck( 'url')
    //     )
    //         .subscribe( console.log )
    // } );


/**
 * mergeall
 */
const input1$ = fromEvent<KeyboardEvent>( textInput, 'keyup' );

input1$
    .pipe(
        debounceTime( 500 ),
        pluck<KeyboardEvent, string>( 'target', 'value'),
        map<string, Observable<GithubUsersResp>>( text => ajax.getJSON(
                `https://api.github.com/search/users?q=${ text }`
            )),
        mergeAll<GithubUsersResp>(),
        pluck<GithubUsersResp, GithubUser[]>('items')
    )
    .subscribe( mostrarUsuarios );



