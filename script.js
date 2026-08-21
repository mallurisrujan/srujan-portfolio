/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const navbar = document.querySelector(".navbar");

if (navbar) {
    window.addEventListener("scroll", () => {

        if (window.scrollY > 40) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });
}


/* =========================================================
   MOBILE MENU
========================================================= */

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (menuButton && mobileMenu) {

    /* Open / close menu */

    menuButton.addEventListener("click", () => {

        menuButton.classList.toggle("active");
        mobileMenu.classList.toggle("open");
        document.body.classList.toggle("menu-open");

    });


    /* Close menu when clicking a link */

    const mobileLinks = mobileMenu.querySelectorAll("a");

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            menuButton.classList.remove("active");
            mobileMenu.classList.remove("open");
            document.body.classList.remove("menu-open");

        });

    });

}


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const revealElements = document.querySelectorAll(".reveal");

    if (!revealElements.length) {
        return;
    }

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.08
        }
    );


    revealElements.forEach(element => {

        revealObserver.observe(element);

    });

});


/* =========================================================
   DATA FLOW ANIMATION
========================================================= */

const systemNodes = document.querySelectorAll(".system-node");

if (systemNodes.length > 0) {

    let currentNode = 0;

    /* Make the first node active immediately */

    systemNodes[currentNode].classList.add("active");


    /* Rotate active state */

    setInterval(() => {

        systemNodes.forEach(node => {
            node.classList.remove("active");
        });


        systemNodes[currentNode].classList.add("active");


        currentNode++;

        if (currentNode >= systemNodes.length) {
            currentNode = 0;
        }

    }, 1800);

}


/* =========================================================
   CURRENT YEAR
========================================================= */

const currentYear = new Date().getFullYear();

const footer = document.querySelector("footer");

if (footer) {

    footer.innerHTML = footer.innerHTML.replace(
        "2026",
        currentYear
    );

}


/* =========================================================
   PAGE TRANSITIONS
========================================================= */

document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function (event) {

        const href = this.getAttribute("href");


        /* Ignore links that should behave normally */

        if (
            !href ||
            href.startsWith("#") ||
            href.startsWith("http") ||
            href.startsWith("mailto:") ||
            href.startsWith("tel:") ||
            href.startsWith("javascript:")
        ) {
            return;
        }


        /* Don't animate if opening in a new tab */

        if (
            this.target === "_blank" ||
            event.ctrlKey ||
            event.metaKey ||
            event.shiftKey ||
            event.altKey
        ) {
            return;
        }


        event.preventDefault();


        /* Close mobile menu before leaving */

        if (menuButton && mobileMenu) {

            menuButton.classList.remove("active");
            mobileMenu.classList.remove("open");
            document.body.classList.remove("menu-open");

        }


        /* Start page exit animation */

        document.body.classList.add("page-leaving");


        /* Navigate after animation */

        setTimeout(() => {

            window.location.href = href;

        }, 300);

    });

});


/* =========================================================
   ESCAPE KEY — CLOSE MOBILE MENU
========================================================= */

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        if (menuButton && mobileMenu) {

            menuButton.classList.remove("active");
            mobileMenu.classList.remove("open");
            document.body.classList.remove("menu-open");

        }

    }

});