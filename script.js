document.addEventListener("DOMContentLoaded", () => {
    console.log("Ahmed Portfolio Loaded Successfully!");

    const menuBtn = document.getElementById("menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (menuBtn) {
        menuBtn.addEventListener("click", () => {
            navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
            if (navLinks.style.display === "flex") {
                navLinks.style.flexDirection = "column";
                navLinks.style.position = "absolute";
                navLinks.style.top = "70px";
                navLinks.style.left = "0";
                navLinks.style.width = "100%";
                navLinks.style.background = "#07111f";
                navLinks.style.padding = "20px";
                navLinks.style.borderBottom = "1px solid rgba(135, 202, 232, 0.17)";
            }
        });
    }

    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thank you! Your message has been sent successfully.");
            form.reset();
        });
    }
});