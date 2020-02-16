/**
 *
 */
import {fromEvent, interval, Observable, of} from "rxjs";
import {catchError, debounceTime, map, mergeAll, mergeMap, pluck, switchMap} from 'rxjs/operators';
import {ajax, AjaxError} from 'rxjs/ajax';
import {GithubUser, GithubUsersResp} from "./interfaces/github-users";


const click$ = fromEvent( document, 'click');
const interval$ = interval(1000);

click$
.pipe(
    // mergeMap( () => interval$ )
switchMap( () => interval$ )
)
.subscribe(console.log);


