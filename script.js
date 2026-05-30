/* ==========================
   MOBILE MENU
========================== */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});


/* ==========================
   ACTIVE NAVIGATION
========================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

});


/* ==========================
   SKILL BAR ANIMATION
========================== */

const skillBars = document.querySelectorAll(".progress");

function animateSkills() {

    skillBars.forEach(bar => {

        const rect = bar.getBoundingClientRect();

        if (rect.top < window.innerHeight - 100) {

            const width = bar.dataset.width;

            bar.style.width = width;

        }

    });

}

window.addEventListener("scroll", animateSkills);
window.addEventListener("load", animateSkills);


/* ==========================
   FAQ ACCORDION
========================== */

const faqQuestions =
document.querySelectorAll(".faq-question");

faqQuestions.forEach(question => {

    question.addEventListener("click", () => {

        const answer =
        question.nextElementSibling;

        const isOpen =
        answer.style.maxHeight;

        document
        .querySelectorAll(".faq-answer")
        .forEach(item => {
            item.style.maxHeight = null;
            item.style.padding = "0 20px";
        });

        if (!isOpen) {

            answer.style.maxHeight =
            answer.scrollHeight + "px";

            answer.style.padding =
            "0 20px 20px";

        }

    });

});


/* ==========================
   PORTFOLIO FILTER
========================== */

const filterButtons =
document.querySelectorAll(
".portfolio-filter button"
);

const portfolioItems =
document.querySelectorAll(
".portfolio-card"
);

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter =
        button.dataset.filter;

        portfolioItems.forEach(item => {

            if (
                filter === "all" ||
                item.dataset.category === filter
            ) {

                item.style.display = "block";

            } else {

                item.style.display = "none";

            }

        });

    });

});


/* ==========================
   BACK TO TOP
========================== */

const backToTop =
document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        backToTop.style.opacity = "1";
        backToTop.style.visibility = "visible";

    } else {

        backToTop.style.opacity = "0";
        backToTop.style.visibility = "hidden";

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* ==========================
   DARK / LIGHT MODE
========================== */

/* ==========================
   DARK / LIGHT MODE
========================== */

const themeToggle = document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "light"){

    document.body.classList.add("light-mode");
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';

}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        localStorage.setItem("theme","light");
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';

    }else{

        localStorage.setItem("theme","dark");
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';

    }

});

/* ==========================
   SCROLL REVEAL
========================== */

const revealElements =
document.querySelectorAll(
".service-card, .portfolio-card, .step, .about-card, .contact-info, .contact-form"
);

function revealOnScroll() {

    revealElements.forEach(el => {

        const top =
        el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            el.style.opacity = "1";
            el.style.transform =
            "translateY(0)";

        }

    });

}

revealElements.forEach(el => {

    el.style.opacity = "0";

    el.style.transform =
    "translateY(50px)";

    el.style.transition =
    "0.7s ease";

});

window.addEventListener(
"scroll",
revealOnScroll
);

window.addEventListener(
"load",
revealOnScroll
);


/* ==========================
   HEADER SCROLL EFFECT
========================== */

const header =
document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background =
        "rgba(8,17,31,0.95)";

        header.style.boxShadow =
        "0 5px 25px rgba(0,0,0,.25)";

    } else {

        header.style.background =
        "rgba(8,17,31,0.70)";

        header.style.boxShadow =
        "none";

    }

});


/* ==========================
   HERO PARALLAX EFFECT
========================== */

window.addEventListener("mousemove", (e) => {

    const glow =
    document.querySelector(".image-glow");

    const x =
    (window.innerWidth / 2 - e.pageX) / 40;

    const y =
    (window.innerHeight / 2 - e.pageY) / 40;

    glow.style.transform =
    `translate(${x}px, ${y}px)`;

});


/* ==========================
   CONTACT FORM DEMO
========================== */

const contactForm =
document.querySelector(".contact-form");

contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert(
        "Thank you for your message! I will contact you soon."
    );

    contactForm.reset();

});