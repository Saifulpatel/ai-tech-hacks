/* =========================
   MOBILE MENU
========================= */

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuButton.textContent = "✕";
    } else {
        menuButton.textContent = "☰";
    }

});


/* Close mobile menu after clicking link */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuButton.textContent = "☰";

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !email || !subject || !message) {

        formMessage.textContent =
            "Please fill in all fields.";

        return;
    }


    /*
       Frontend demo only.

       Later connect this form with:
       - Formspree
       - EmailJS
       - Netlify Forms
       - Your own backend
    */

    formMessage.textContent =
        "Thanks! Your message is ready to be sent.";

    contactForm.reset();

});


/* =========================
   CURRENT YEAR
========================= */

document.getElementById("year").textContent =
    new Date().getFullYear();