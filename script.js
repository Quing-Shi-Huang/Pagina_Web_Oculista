/* =========================================
   MENÚ RESPONSIVE
========================================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }
});


/* Cerrar menú al hacer click en un enlace */

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");
        menuToggle.textContent = "☰";

    });

});


/* =========================================
   FORMULARIO
========================================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const email = document.getElementById("email").value.trim();
    const servicio = document.getElementById("servicio").value;

    if (!nombre || !telefono || !email || !servicio) {

        formMessage.textContent =
            "Por favor, completa todos los campos obligatorios.";

        formMessage.style.color = "#d9534f";

        return;
    }

    formMessage.textContent =
        `¡Gracias, ${nombre}! Hemos recibido tu consulta.`;

    formMessage.style.color = "#0b6e69";

    contactForm.reset();

});


/* =========================================
   ANIMACIÓN AL HACER SCROLL
========================================= */

const animatedElements = document.querySelectorAll(
    ".service-card, .value-card, .feature, .contact-item"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";

    observer.observe(element);

});


/* =========================================
   EFECTO NAVBAR AL HACER SCROLL
========================================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(5, 50, 49, 0.95)";
        header.style.backdropFilter = "blur(15px)";

    } else {

        header.style.background = "transparent";
        header.style.backdropFilter = "none";

    }

});
