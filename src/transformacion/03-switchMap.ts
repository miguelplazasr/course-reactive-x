/**
 * switchMAP: CANCELA TODAS LAS SUBSCRIPCIONES Y TRABAJA SOLAMENTE CON LA ULTIMA RECIBIDA
 */
import {fromEvent, Observable, of} from "rxjs";
import {catchError, debounceTime, map, mergeAll, mergeMap, pluck, switchMap} from 'rxjs/operators';
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


const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup' );

input$
    .pipe(
        debounceTime<KeyboardEvent>( 500 ),
        pluck<KeyboardEvent, string>( 'target', 'value'),
        mergeMap<string, Observable<GithubUsersResp>>( text => ajax.getJSON(
            `https://api.github.com/search/users?q=${ text }`
        )),
        pluck<GithubUsersResp, GithubUser[]>('items')
    ); // .subscribe( mostrarUsuarios );



const url = 'https://httpbin.org/delay/1?arg=';

input$
    .pipe(
        pluck('target', 'value'),
        switchMap( text => ajax.getJSON( url + text))
    )
    .subscribe(console.log);
