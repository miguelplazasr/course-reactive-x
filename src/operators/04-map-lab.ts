/**
 * ejercicio : crear un progress bar que se complete a medida que se hace scroll en la pagina
 */
import {fromEvent} from 'rxjs';
import {map, tap} from 'rxjs/operators';


const txt = document.createElement('div');
txt.innerHTML = `
Lorem ipsum dolor sit amet sodales blandit fermentum malesuada ut iaculis. Condimentum hendrerit vestibulum tempus aliquet aliquam lobortis pellentesque tristique platea in integer. Maecenas incididunt elementum aliqua elit hac pretium aliquam. Ullamcorper ultrices orci sollicitudin et nisl labore pharetra fermentum vestibulum phasellus aliqua eros imperdiet et. Ullamcorper semper pretium venenatis praesent donec nec tincidunt sodales dolore at.
</br></br>
Quisque faucibus fringilla nisl tincidunt sollicitudin diam tincidunt proin gravida lectus. Ullamcorper elit maecenas consectetur dictum mattis scelerisque est velit. Consectetur risus facilisis vivamus nibh tellus elementum nisi urna tortor et elit. Suspendisse volutpat senectus nisi purus congue facilisis consectetur risus tristique gravida eiusmod odio labore. Enim senectus posuere tortor hendrerit ultrices mattis dictum senectus cursus.
</br></br>
Suspendisse porttitor nullam tempor facilisi sodales tristique diam fames consectetur lacinia velit euismod. Eleifend malesuada integer magna justo eleifend id dictum neque vel erat vulputate non. Porttitor turpis cras mauris purus augue quisque eget. Augue dictum donec tortor interdum tellus elementum nulla nec fermentum mi mattis iaculis. Tristique quisque eget libero sed feugiat volutpat luctus aliqua venenatis.
</br></br>
Curabitur nec mauris porttitor est tellus morbi lobortis nisi vulputate quisque venenatis augue facilisi. Urna dui congue labore turpis pellentesque lacinia eu luctus scelerisque tortor habitasse vulputate purus hac. Dictumst iaculis bibendum mi tortor malesuada sodales venenatis. Vulputate fermentum lectus netus vivamus feugiat faucibus magna lacinia. Eu phasellus venenatis urna duis habitasse vestibulum eu netus ultricies risus tristique.
</br></br>
Lorem ipsum dolor sit amet aliquet lacinia malesuada elit consequat fringilla leo pharetra. Sodales sagittis posuere phasellus urna etiam molestie purus nec pellentesque vulputate libero. Tincidunt justo mauris quisque eget fermentum condimentum at iaculis lacus. Morbi vestibulum nullam fringilla aliquam gravida enim dictumst elementum sed fusce nullam bibendum et labore. Gravida massa nibh fringilla non bibendum ornare odio elementum euismod labore pulvinar bibendum.
</br></br>
Feugiat laoreet faucibus vitae egestas imperdiet facilisis diam laoreet porttitor leo. Libero aliquam est lacus leo sollicitudin neque non lectus pretium fames vitae bibendum posuere rhoncus. A vitae interdum labore consequat suspendisse mollis auctor. Justo ullamcorper rhoncus tempus nibh lectus leo tellus. Dictumst maecenas pellentesque condimentum faucibus tempor labore eleifend sagittis.
</br></br>
Ornare habitasse sed fermentum justo ultrices erat nisi mattis scelerisque aliqua condimentum nisi in ut. Pulvinar facilisis porttitor eiusmod pharetra cras incididunt velit urna fringilla labore eu. Ut ullamcorper maecenas mi facilisi at maecenas feugiat pellentesque fusce nulla dolore euismod lectus lacus. Risus enim curabitur dictum nunc pharetra cras congue lacinia iaculis. Facilisis porttitor quam et pellentesque mi facilisis fermentum consequat sodales donec auctor.
</br></br>
Fames dolore aliquam do vitae donec eu quisque auctor pretium. Habitasse praesent justo at neque sollicitudin aliquam leo. Scelerisque aliquam dolore bibendum dictum urna scelerisque nullam. Senectus suspendisse luctus sagittis luctus nisi posuere aenean justo dui dictum platea ac. Iaculis magna id nullam vulputate integer fames luctus velit eget non.
`;

const body = document.querySelector('body');
body.append( txt );

const progressbar = document.createElement('div');
progressbar.setAttribute('class', 'progress-bar');
body.append( progressbar );


// Funcion que haga el calculo de la progress bar
const calcularPorcentajeScroll = ( event ) => {
    // console.log( event );

    // Estas propiedades son las que se necesitan para hacer el calculo del avance del scroll
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;

    // console.log( { scrollTop, scrollHeight, clientHeight })

    return ( scrollTop / ( scrollHeight - clientHeight )) * 100;
};

// streams
const scroll$ = fromEvent( document, 'scroll');

// scroll$.subscribe( console.log );


const progress$ = scroll$.pipe(
    // Los siguientes dos maps son identicos pero el segundo es mas limpio

    // map( event =>  calcularPorcentajeScroll( event ))
    map( calcularPorcentajeScroll ),
    tap( console.log )
);

progress$.subscribe( porcentaje => {
    progressbar.style.width = `${ porcentaje }%`
} );
