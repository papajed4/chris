/* =========================================================
   CHRIS BROWN — NAVIGATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("mobile-menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");
    const pageOverlay = document.getElementById("page-overlay");
    const mobileLinks = document.querySelectorAll(".mobile-nav-link");


    /* -----------------------------------------------------
       SAFETY CHECK
       ----------------------------------------------------- */

    if (!menuToggle || !mobileMenu) {
        return;
    }


    /* -----------------------------------------------------
       OPEN MENU
       ----------------------------------------------------- */

    function openMenu() {

        mobileMenu.classList.add("active");

        if (pageOverlay) {
            pageOverlay.classList.add("active");
        }

        document.body.classList.add("menu-open");

        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute("aria-label", "Close menu");

        mobileMenu.setAttribute("aria-hidden", "false");
    }


    /* -----------------------------------------------------
       CLOSE MENU
       ----------------------------------------------------- */

    function closeMenu() {

        mobileMenu.classList.remove("active");

        if (pageOverlay) {
            pageOverlay.classList.remove("active");
        }

        document.body.classList.remove("menu-open");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open menu");

        mobileMenu.setAttribute("aria-hidden", "true");
    }


    /* -----------------------------------------------------
       TOGGLE MENU
       ----------------------------------------------------- */

    function toggleMenu() {

        const isOpen = mobileMenu.classList.contains("active");

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }

    }


    /* -----------------------------------------------------
       MENU BUTTON
       ----------------------------------------------------- */

    menuToggle.addEventListener("click", toggleMenu);


    /* -----------------------------------------------------
       OVERLAY
       ----------------------------------------------------- */

    if (pageOverlay) {

        pageOverlay.addEventListener("click", closeMenu);

    }


    /* -----------------------------------------------------
       MOBILE NAV LINKS
       ----------------------------------------------------- */

    mobileLinks.forEach((link) => {

        link.addEventListener("click", () => {

            closeMenu();

        });

    });


    /* -----------------------------------------------------
       ESC KEY
       ----------------------------------------------------- */

    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            if (mobileMenu.classList.contains("active")) {

                closeMenu();

            }

        }

    });


    /* -----------------------------------------------------
       DESKTOP RESIZE
       ----------------------------------------------------- */

    window.addEventListener("resize", () => {

        if (window.innerWidth > 768) {

            closeMenu();

        }

    });

});