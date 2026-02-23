// gsap code
gsap.registerPlugin(ScrollTrigger);

let tl = gsap.timeline();

tl.from("#title, #navToggle, #navMenu, #home-content", {
    delay: 0.2,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
});

gsap.from("#about-content", {
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
        trigger:"#about-content",
        scroller:"body",
        start: "top 50%",
    },
});
gsap.from("#skills", {
    opacity: 0,
    duration: 0.8,
    scrollTrigger: {
        trigger:"#skills",
        scroller:"body",
        start: "top 65%",
    },
});

document.addEventListener("DOMContentLoaded", function () {
    // Flip cards functionality
    var flipCards = document.querySelectorAll(".flip-card");
    for (var i = 0; i < flipCards.length; i++) {
        flipCards[i].addEventListener("click", function () {
            this.classList.toggle("flipped");
        });
    }

    // Mobile navbar toggle
    const navToggle = document.getElementById("navToggle");
    const navMenu = document.getElementById("navMenu");
    const hamburger = navToggle.querySelector(".hamburger");
    const navLinks = document.querySelectorAll("#navMenu a");

    navToggle.addEventListener("click", function () {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // Close menu when clicking on a link
    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });

    // Close menu when clicking outside
    document.addEventListener("click", function (event) {
        const isClickInside =
            navMenu.contains(event.target) || navToggle.contains(event.target);
        if (!isClickInside && navMenu.classList.contains("active")) {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        }
    });
});
