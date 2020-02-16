/**
 *
 */
import {ajax, AjaxError} from 'rxjs/ajax';
import {catchError, map, pluck} from 'rxjs/operators';
import {of} from "rxjs";

const url = 'https://httpbin.org/delay/1';

const obs$ = ajax.getJSON( url, {
    'Content-Type': 'application/json',
    'mi-token': 'abc123'
} );

obs$.subscribe( data => console.log('data -> ', data ));
