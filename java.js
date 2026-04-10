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

// Opisy cennika

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

// Księga wpisów

let currentPage = 0;

function renderBook(opinie) {
    const container = document.getElementById("book-pages");
    container.innerHTML = "";

    opinie.forEach((op, index) => {
        const stars = "★".repeat(op.gwiazdki) + "☆".repeat(5 - op.gwiazdki);

        const page = document.createElement("div");
        page.classList.add("book-page");
        page.style.zIndex = opinie.length - index;

        page.innerHTML = `
            <div class="stars">${stars}</div>
            <div class="text">"${op.tekst}"</div>
            <div class="author">— ${op.imie}</div>
        `;

        container.appendChild(page);
    });
}

function nextPage() {
    const pages = document.querySelectorAll(".book-page");
    if (currentPage < pages.length) {
        pages[currentPage].classList.add("flipped");
        currentPage++;
    }
}

function prevPage() {
    const pages = document.querySelectorAll(".book-page");
    if (currentPage > 0) {
        currentPage--;
        pages[currentPage].classList.remove("flipped");
    }
}
