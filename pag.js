/* =====================================================
   RELÓGIO
===================================================== */

function atualizarDataHora() {

    const hora = document.getElementById("hora");
    const data = document.getElementById("data");

    const agora = new Date();

    const horas = String(
        agora.getHours()
    ).padStart(2, "0");

    const minutos = String(
        agora.getMinutes()
    ).padStart(2, "0");

    const segundos = String(
        agora.getSeconds()
    ).padStart(2, "0");


    hora.textContent =
        `${horas}:${minutos}:${segundos}`;


    const dia = String(
        agora.getDate()
    ).padStart(2, "0");

    const mes = String(
        agora.getMonth() + 1
    ).padStart(2, "0");

    const ano = agora.getFullYear();


    data.textContent =
        `${dia}/${mes}/${ano}`;
}


atualizarDataHora();

setInterval(
    atualizarDataHora,
    1000
);


/* =====================================================
   CARROSSEL
===================================================== */

let currentIndex = 1;


function updateCarousel() {

    const cards =
        document.querySelectorAll(".card");

    if (cards.length === 0) {
        return;
    }


    /* Limita o índice */

    if (currentIndex < 0) {
        currentIndex = cards.length - 1;
    }

    if (currentIndex >= cards.length) {
        currentIndex = 0;
    }


    /* Remove todas as posições */

    cards.forEach(card => {

        card.classList.remove(
            "active",
            "prev",
            "next"
        );

    });


    /* Card ativo */

    cards[currentIndex]
        .classList.add("active");


    /* Card anterior */

    const previousIndex =
        (currentIndex - 1 + cards.length)
        % cards.length;

    cards[previousIndex]
        .classList.add("prev");


    /* Próximo card */

    const nextIndex =
        (currentIndex + 1)
        % cards.length;

    cards[nextIndex]
        .classList.add("next");
}


/* =====================================================
   BOTÃO PRÓXIMO
===================================================== */

function moveNext() {

    currentIndex++;

    updateCarousel();
}


/* =====================================================
   BOTÃO ANTERIOR
===================================================== */

function movePrev() {

    currentIndex--;

    updateCarousel();
}


/* =====================================================
   INICIALIZAÇÃO
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        updateCarousel();


        const nextBtn =
            document.getElementById("nextBtn");

        const prevBtn =
            document.getElementById("prevBtn");


        if (nextBtn) {

            nextBtn.addEventListener(
                "click",
                moveNext
            );

        }


        if (prevBtn) {

            prevBtn.addEventListener(
                "click",
                movePrev
            );

        }

    }
);


/* =====================================================
   REDIMENSIONAMENTO
===================================================== */

window.addEventListener(
    "resize",
    updateCarousel
);

let ultimaPosicao = window.scrollY;
const cabecalho = document.querySelector(".cabecalho");

window.addEventListener("scroll", function () {

    let posicaoAtual = window.scrollY;

    if (posicaoAtual > ultimaPosicao && posicaoAtual > 50) {
        // Rolando para baixo
        cabecalho.style.transform = "translateY(-100%)";
    } else {
        // Rolando para cima
        cabecalho.style.transform = "translateY(0)";
    }

    ultimaPosicao = posicaoAtual;
});