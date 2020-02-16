/**
 * starWith : enviar cualquier argumento antes de que el observable emita
 */
import {combineLatest, forkJoin, fromEvent, interval, merge, of} from "rxjs";
import {catchError, delay, pluck, startWith, take} from "rxjs/operators";
import {ajax} from "rxjs/ajax";

const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'miguelplazasr';

forkJoin({
    user: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}`
    ),
    repos: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}/repos`
    ),
    gits: ajax.getJSON(
        `${GITHUB_API_URL}/${GITHUB_USER}/gistssss`
    ).pipe(
        catchError( err => of([]))
    ),
    }
)
    .pipe(
        catchError( err => of(err.message))
    )
    .subscribe(console.log)


