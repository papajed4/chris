/* =========================================================
   CHRIS BROWN — ANIMATIONS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------------------------
       ELEMENTS TO ANIMATE
       ----------------------------------------------------- */

    const animatedElements = document.querySelectorAll(
        ".management-section, " +
        ".management-intro, " +
        ".management-card, " +
        ".site-footer"
    );


    /* -----------------------------------------------------
       INITIAL STATE
       ----------------------------------------------------- */

    animatedElements.forEach((element) => {

        element.classList.add("animate-on-scroll");

    });


    /* -----------------------------------------------------
       INTERSECTION OBSERVER
       ----------------------------------------------------- */

    const observerOptions = {
        root: null,
        rootMargin: "0px 0px -80px 0px",
        threshold: 0.08
    };


    const observer = new IntersectionObserver(
        (entries, observerInstance) => {

            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }


                entry.target.classList.add("is-visible");

                observerInstance.unobserve(entry.target);

            });

        },
        observerOptions
    );


    /* -----------------------------------------------------
       OBSERVE ELEMENTS
       ----------------------------------------------------- */

    animatedElements.forEach((element) => {

        observer.observe(element);

    });


    /* -----------------------------------------------------
       HERO LOAD
       ----------------------------------------------------- */

    const hero = document.querySelector(".hero");

    if (hero) {

        requestAnimationFrame(() => {

            hero.classList.add("hero-loaded");

        });

    }

});