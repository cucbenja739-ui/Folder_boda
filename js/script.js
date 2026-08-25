const boton = document.querySelector("#abrirInvitacion");

const hero = document.querySelector(".hero");

const contenido = document.querySelector("#contenido");

const musica = document.querySelector("#musicaFondo");

const botonMusica = document.querySelector("#botonMusica");

boton.addEventListener("click", function(event){

    event.preventDefault();

    hero.style.opacity = "0";
    hero.style.transform = "translateY(-60px)";

    // Intenta reproducir la música al abrir la invitación
    // (el navegador ya cuenta este clic como interacción del usuario)
    musica.play().then(function(){

        botonMusica.classList.add("sonando");

    }).catch(function(){

        // Si el navegador bloquea el autoplay, el usuario
        // puede darle clic manualmente al botón flotante
    });

    setTimeout(function(){

        hero.style.display = "none";

        contenido.style.display = "flex";

        document.querySelector("#bienvenida").scrollIntoView({

            behavior: "smooth"

        });

    },800);

});

// Botón flotante de música (play / pausa manual)
botonMusica.addEventListener("click", function(){

    if(musica.paused){

        musica.play();

        botonMusica.classList.add("sonando");

    } else {

        musica.pause();

        botonMusica.classList.remove("sonando");

    }

});


const fechaBoda = new Date("November 21, 2026 10:00:00");
const diasElemento = document.querySelector("#dias");

const horasElemento = document.querySelector("#horas");

const minutosElemento = document.querySelector("#minutos");

const segundosElemento = document.querySelector("#segundos");

function actualizarContador(){
const ahora = new Date();
const diferencia = fechaBoda - ahora;
const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60) );
const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

diasElemento.textContent = dias;
horasElemento.textContent = horas;
minutosElemento.textContent = minutos;
segundosElemento.textContent = segundos;

}

actualizarContador();

setInterval(actualizarContador,1000);


// ===========================
// Animaciones al hacer scroll
// ===========================

const elementosAnimados = document.querySelectorAll(
    ".animar, .animar-izquierda, .animar-derecha, .animar-escala"
);

const observador = new IntersectionObserver(function(entradas){

    entradas.forEach(function(entrada){

        if(entrada.isIntersecting){

            entrada.target.classList.add("mostrar");

            observador.unobserve(entrada.target);

        }

    });

}, {

    threshold: 0.15

});

elementosAnimados.forEach(function(elemento){

    observador.observe(elemento);

});
