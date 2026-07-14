/*
=========================================
Nature Escape
script.js
=========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================
      Dark Mode
    =========================*/

    const body = document.body;
    const darkBtn = document.getElementById("darkModeBtn");

    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
    }

    if (darkBtn) {

        darkBtn.addEventListener("click", () => {

            body.classList.toggle("dark-mode");

            if (body.classList.contains("dark-mode")) {

                localStorage.setItem("theme", "dark");

            } else {

                localStorage.setItem("theme", "light");

            }

        });

    }

    /*=========================
      Back To Top
    =========================*/

    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 300) {

            backToTop?.classList.add("show");

        } else {

            backToTop?.classList.remove("show");

        }

    });

    backToTop?.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /*=========================
      Navbar Scroll
    =========================*/

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar?.classList.add("scrolled");

        } else {

            navbar?.classList.remove("scrolled");

        }

    });

    /*=========================
      Search Destination
    =========================*/

    const searchInput = document.getElementById("searchInput");

    if (searchInput) {

        searchInput.addEventListener("keyup", function () {

            const keyword = this.value.toLowerCase();

            const cards = document.querySelectorAll(".destination-card");

            cards.forEach(card => {

                const text = card.textContent.toLowerCase();

                if (text.includes(keyword)) {

                    card.style.display = "block";

                } else {

                    card.style.display = "none";

                }

            });

        });

    }

    /*=========================
      Gallery Modal
    =========================*/

    const modalImage = document.getElementById("modalImage");

    const galleryImages = document.querySelectorAll(".gallery-img");

    galleryImages.forEach(image => {

        image.addEventListener("click", () => {

            if (modalImage) {

                modalImage.src = image.src;

                modalImage.alt = image.alt;

            }

        });

    });

    /*=========================
      Newsletter
    =========================*/

    const newsletterForm = document.getElementById("newsletterForm");

    if (newsletterForm) {

        newsletterForm.addEventListener("submit", function (e) {

            e.preventDefault();

            const toastElement = document.getElementById("successToast");

            if (toastElement) {

                const toast = new bootstrap.Toast(toastElement);

                toast.show();

            }

            this.reset();

        });

    }

    /*=========================
      Contact Form
    =========================*/

    const contactForm = document.getElementById("contactForm");

    if (contactForm) {

        contactForm.addEventListener("submit", function (e) {

            e.preventDefault();

            if (!this.checkValidity()) {

                e.stopPropagation();

            } else {

                const toastElement = document.getElementById("contactToast");

                if (toastElement) {

                    const toast = new bootstrap.Toast(toastElement);

                    toast.show();

                }

                this.reset();

            }

            this.classList.add("was-validated");

        });

    }

    /*=========================
      Loading Spinner
    =========================*/

    const loading = document.getElementById("loading");

    if (loading) {

        window.addEventListener("load", () => {

            setTimeout(() => {

                loading.style.display = "none";

            }, 500);

        });

    }

    /*=========================
      Fade Animation
    =========================*/

    const sections = document.querySelectorAll("section");

    sections.forEach(section => {

        section.classList.add("fade-in");

    });

});