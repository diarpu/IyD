import '../css/app.css'

// import './assets.min.js'
import typeit from './typeit.js';

document.addEventListener("DOMContentLoaded", function () {

    new typeit("#typed", {
        speed: 75,
        loop: true,
    })
    .pause(500)
    .type('Éxito', {delay: 100})
    .pause(500)
    .delete()
    .type('Nosotros', {speed: 100})
    .pause(2000)
    .go();

    new typeit("#typed2", {
        speed: 75,
        loop: true,
    })
    .pause(500)
    .type('Éxito', {delay: 100})
    .pause(500)
    .delete()
    .type('Nosotros', {speed: 100})
    .pause(2000)
    .go();
});

import './main.min.js'

if (module.hot) {
    module.hot.accept();
}
