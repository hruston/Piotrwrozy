function reveal() {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {
            reveals[i].classList.add("active");
        }
    }
}

function toggleMenu() {
    const sideMenu = document.getElementById("side-menu");
    const menuOverlay = document.getElementById("menu-overlay");

    if (sideMenu) {
        sideMenu.classList.toggle("active");
    }

    if (menuOverlay) {
        menuOverlay.classList.toggle("active");
    }
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

window.addEventListener("scroll", function () {
    const presentation = document.querySelector(".presentation");

    if (!presentation) return;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const fadeStart = 50;
    const fadeEnd = 600;

    let opacity = 1 - (scrollTop - fadeStart) / (fadeEnd - fadeStart);

    if (opacity > 1) opacity = 1;
    if (opacity < 0) opacity = 0;

    presentation.style.opacity = opacity;
});


function toggleRytual(element) {
    const box = element.parentElement;
    box.classList.toggle("active");

    const toggleText = element.querySelector(".rytual-toggle");

    if (box.classList.contains("active")) {
        toggleText.innerText = "— Zwiń opis —";
    } else {
        toggleText.innerText = "— Rozwiń opis —";
    }
}

function toggleOpis(element) {
    const item = element.parentElement;
    item.classList.toggle("open");

    if (item.classList.contains("open")) {
        element.innerText = "— Zwiń opis —";
    } else {
        element.innerText = "— Rozwiń opis —";
    }
}
