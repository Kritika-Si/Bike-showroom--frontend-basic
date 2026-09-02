/* ================= SCROLL ================= */

function scrollToBikes() {

    document.getElementById("bikes").scrollIntoView({
        behavior: "smooth"
    });

}


/* ================= TEST RIDE ================= */

function showMessage() {

    alert(
        "Thank you for your interest! 🚀\n\n" +
        "Our team will contact you shortly to schedule your test ride."
    );

}


/* ================= FILTER ================= */

function filterBikes(category, button) {

    const cards = document.querySelectorAll(".bike-card");

    const filters = document.querySelectorAll(".filter");

    filters.forEach(filter => {
        filter.classList.remove("active");
    });

    button.classList.add("active");

    cards.forEach(card => {

        if (
            category === "all" ||
            card.dataset.category === category
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


/* ================= SEARCH ================= */

function searchBikes() {

    const search =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    const cards =
        document.querySelectorAll(".bike-card");

    cards.forEach(card => {

        const name =
            card.querySelector("h3")
            .innerText
            .toLowerCase();

        const category =
            card.dataset.category
            .toLowerCase();

        if (
            name.includes(search) ||
            category.includes(search)
        ) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


/* ================= MODAL DATA ================= */

const bikes = {

    "Velocity X1": {
        engine: "155 CC",
        power: "18.4 HP",
        mileage: "48 KM/L",
        speed: "130 KM/H"
    },

    "Velocity R7": {
        engine: "689 CC",
        power: "73 HP",
        mileage: "22 KM/L",
        speed: "210 KM/H"
    },

    "Velocity Classic": {
        engine: "349 CC",
        power: "20 HP",
        mileage: "35 KM/L",
        speed: "120 KM/H"
    },

    "Velocity Terra": {
        engine: "450 CC",
        power: "40 HP",
        mileage: "30 KM/L",
        speed: "165 KM/H"
    },

    "Velocity S5": {
        engine: "250 CC",
        power: "28 HP",
        mileage: "40 KM/L",
        speed: "145 KM/H"
    },

    "Velocity ZX": {
        engine: "998 CC",
        power: "150 HP",
        mileage: "18 KM/L",
        speed: "299 KM/H"
    }

};


/* ================= OPEN MODAL ================= */

function openModal(bikeName) {

    const bike = bikes[bikeName];

    document.getElementById("modalTitle").innerText =
        bikeName;

    document.getElementById("modalEngine").innerText =
        bike.engine;

    document.getElementById("modalPower").innerText =
        bike.power;

    document.getElementById("modalMileage").innerText =
        bike.mileage;

    document.getElementById("modalSpeed").innerText =
        bike.speed;

    document.getElementById("bikeModal")
        .classList.add("show");

}


/* ================= CLOSE MODAL ================= */

function closeModal() {

    document.getElementById("bikeModal")
        .classList.remove("show");

}


/* ================= CLOSE ON OUTSIDE CLICK ================= */

window.addEventListener("click", function(event) {

    const modal =
        document.getElementById("bikeModal");

    if (event.target === modal) {

        closeModal();

    }

});


/* ================= MOBILE MENU ================= */

function toggleMenu() {

    const nav =
        document.querySelector(".navbar nav");

    if (nav.style.display === "flex") {

        nav.style.display = "none";

    } else {

        nav.style.display = "flex";

        nav.style.position = "absolute";

        nav.style.top = "80px";

        nav.style.left = "0";

        nav.style.width = "100%";

        nav.style.background = "#080808";

        nav.style.padding = "25px";

        nav.style.flexDirection = "column";

    }

}