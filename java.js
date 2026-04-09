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
    const isOpen = box.classList.contains("open");

    // zamknij wszystkie
    document.querySelectorAll(".rytual-box").forEach(el => {
        el.classList.remove("open");
        const t = el.querySelector(".rytual-toggle");
        if (t) t.innerText = "— Rozwiń opis —";
    });

    // otwórz kliknięty, jeśli był zamknięty
    if (!isOpen) {
        box.classList.add("open");
        element.querySelector(".rytual-toggle").innerText = "— Zwiń opis —";
    }
}

function toggleOpis(element) {
    const item = element.parentElement;
    const allItems = document.querySelectorAll(".item");

    // zamknij wszystkie inne
    allItems.forEach(el => {
        if (el !== item) {
            el.classList.remove("open");

            const toggle = el.querySelector(".opis-toggle");
            if (toggle) toggle.innerText = "— Rozwiń opis —";
        }
    });

    // toggle klikniętego
    item.classList.toggle("open");

    if (item.classList.contains("open")) {
        element.innerText = "— Zwiń opis —";
    } else {
        element.innerText = "— Rozwiń opis —";
    }
}
