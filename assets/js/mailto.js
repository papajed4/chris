/* =========================================================
   CHRIS BROWN — MANAGEMENT MAILTO
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* -----------------------------------------------------
       MANAGEMENT EMAIL
       ----------------------------------------------------- */

    const MANAGEMENT_EMAIL = "info@management-inc.site";


    /* -----------------------------------------------------
       INQUIRY TYPES
       ----------------------------------------------------- */

    const inquiryTypes = {

        vip: {
            subject: "VIP Experience Inquiry - Chris Brown",
            message:
                "Hello Chris Brown Management,\n\n" +
                "I am interested in learning more about available VIP " +
                "experiences and opportunities.\n\n" +
                "Please provide more information regarding availability, " +
                "pricing, and requirements.\n\n" +
                "Thank you."
        },

        "meet-greet": {
            subject: "Meet & Greet Inquiry - Chris Brown",
            message:
                "Hello Chris Brown Management,\n\n" +
                "I am interested in available Meet & Greet opportunities " +
                "with Chris Brown.\n\n" +
                "Please provide information regarding availability, " +
                "requirements, and pricing.\n\n" +
                "Thank you."
        },

        "private-booking": {
            subject: "Private Booking Inquiry - Chris Brown",
            message:
                "Hello Chris Brown Management,\n\n" +
                "I am interested in booking Chris Brown for a private " +
                "event, corporate event, appearance, or special engagement.\n\n" +
                "Please provide information regarding availability and " +
                "booking requirements.\n\n" +
                "Thank you."
        },

        booking: {
            subject: "Booking Inquiry - Chris Brown",
            message:
                "Hello Chris Brown Management,\n\n" +
                "I would like to inquire about booking Chris Brown.\n\n" +
                "Please provide information regarding availability, " +
                "requirements, and next steps.\n\n" +
                "Thank you."
        },

        tour: {
            subject: "Tour / Ticket Inquiry - Chris Brown",
            message:
                "Hello Chris Brown Management,\n\n" +
                "I would like to inquire about Chris Brown tour " +
                "availability and ticket-related information.\n\n" +
                "Please provide any available information.\n\n" +
                "Thank you."
        },

        general: {
            subject: "General Inquiry - Chris Brown",
            message:
                "Hello Chris Brown Management,\n\n" +
                "I have a general inquiry regarding Chris Brown.\n\n" +
                "Please provide further information when convenient.\n\n" +
                "Thank you."
        },

        join: {
            subject: "Chris Brown Inquiry",
            message:
                "Hello Chris Brown Management,\n\n" +
                "I would like to inquire about joining and available " +
                "opportunities associated with Chris Brown.\n\n" +
                "Please provide more information.\n\n" +
                "Thank you."
        },

        store: {
            subject: "Store / Merchandise Inquiry - Chris Brown",
            message:
                "Hello Chris Brown Management,\n\n" +
                "I have an inquiry regarding Chris Brown merchandise " +
                "or store-related information.\n\n" +
                "Please provide further information.\n\n" +
                "Thank you."
        },

        "book-order": {
            subject: "Book Order Inquiry - Chris Brown",
            message:
                "Hello Chris Brown Management,\n\n" +
                "I am interested in ordering the Chris Brown book.\n\n" +
                "Please provide information regarding availability, " +
                "ordering, and shipping.\n\n" +
                "Thank you."
        }

    };


    /* -----------------------------------------------------
       OPEN MANAGEMENT EMAIL
       ----------------------------------------------------- */

    function openManagementEmail(type, extraData = {}) {

        const inquiry =
            inquiryTypes[type] || inquiryTypes.general;

        let subject = inquiry.subject;
        let message = inquiry.message;


        /* ---------------------------------------------
           OPTIONAL EVENT INFORMATION
           --------------------------------------------- */

        if (extraData.date) {

            message +=
                "\n\nDate: " +
                extraData.date;

        }

        if (extraData.venue) {

            message +=
                "\nVenue: " +
                extraData.venue;

        }

        if (extraData.location) {

            message +=
                "\nLocation: " +
                extraData.location;

        }


        /* ---------------------------------------------
           BUILD MAILTO LINK
           --------------------------------------------- */

        const mailtoURL =
            "mailto:" +
            MANAGEMENT_EMAIL +
            "?subject=" +
            encodeURIComponent(subject) +
            "&body=" +
            encodeURIComponent(message);


        /* ---------------------------------------------
           OPEN EMAIL CLIENT
           --------------------------------------------- */

        window.location.href = mailtoURL;

    }


    /* -----------------------------------------------------
       MANAGEMENT / ACTION BUTTONS
       ----------------------------------------------------- */

    const actionButtons = document.querySelectorAll(
        "[data-type]"
    );


    actionButtons.forEach((button) => {

        button.addEventListener("click", (event) => {

            const type = button.dataset.type;


            /* -----------------------------------------
               NORMAL LINKS

               LISTEN NOW is not a management action.
               ----------------------------------------- */

            if (type === "listen") {
                return;
            }


            /* -----------------------------------------
               PREVENT # FROM JUMPING TO TOP
               ----------------------------------------- */

            event.preventDefault();


            /* -----------------------------------------
               OPEN MANAGEMENT EMAIL
               ----------------------------------------- */

            openManagementEmail(type, {

                date: button.dataset.date,
                venue: button.dataset.venue,
                location: button.dataset.location

            });

        });

    });

});