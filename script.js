
const glow = document.querySelector(".cursor-glow");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove",(e)=>{
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate(){
currentX += (mouseX - currentX) * 0.35;
currentY += (mouseY - currentY) * 0.35;

    glow.style.left = currentX + "px";
    glow.style.top = currentY + "px";

    requestAnimationFrame(animate);
}

animate();





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

document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        navMenu.classList.remove("active");
    }
});

window.addEventListener("scroll", () => {
    navMenu.classList.remove("active");
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



/* ==========================
   PORTFOLIO FILTER
========================== */
const filterButtons = document.querySelectorAll(".portfolio-filter button");
const portfolioItems = document.querySelectorAll(".portfolio-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const filter = button.dataset.filter;

        portfolioItems.forEach(item => {

            if (
                filter === "all" ||
                item.dataset.category === filter
            ) {
                item.style.display = "";
            } else {
                item.style.display = "none";
            }

        });

    });

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

const modal =
    document.getElementById("customModal");

const closeModal =
    document.getElementById("closeModal");

const successModal =
    document.getElementById("successModal");

const closeSuccess =
    document.getElementById("closeSuccess");

contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const name =
        contactForm.querySelector('input[type="text"]').value.trim();

    const email =
        contactForm.querySelector('input[type="email"]').value.trim();

    const message =
        contactForm.querySelector('textarea').value.trim();

    if (!name || !email || !message) {

        modal.classList.add("show");
        return;

    }

    successModal.classList.add("show");

    contactForm.reset();

});

closeModal.addEventListener("click", () => {

    modal.classList.remove("show");

});

closeSuccess.addEventListener("click", () => {

    successModal.classList.remove("show");

});








new Swiper(".testimonialSwiper", {

    loop: true,

    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    spaceBetween: 25,

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }

});




window.addEventListener("beforeunload", () => {
    localStorage.setItem("scrollPos", window.scrollY);
});

window.addEventListener("load", () => {
    const scrollPos = localStorage.getItem("scrollPos");

    if (scrollPos) {
        window.scrollTo(0, parseInt(scrollPos));
    }
});

