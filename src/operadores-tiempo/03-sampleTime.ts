/**
 * sampleTime : obtiene el ultimo valor emitido en un intervalo de tiempo
 */
import {fromEvent} from 'rxjs';
import {map, sampleTime} from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>( document, 'click');

click$
    .pipe(
        sampleTime(2000), // colocar el sampleTime antes del map por ahorro de memoria porq no se ejecuta el map sino despues de 2 seg

map( ({ x, y }) => ({x, y})),
        // sampleTime(2000) // Si se coloca aqui primero se haria el map y se gurada en memoria y despues de ejecuta el sampleTime
    )
.subscribe(console.log );
