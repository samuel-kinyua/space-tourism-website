const mobileNav = document.querySelector(".nav-bar");
const navToggle = document.querySelector(".hamburger-menu");

navToggle.addEventListener("click", () => {

    const visibility = mobileNav.getAttribute("data-visible");
   
    if (visibility === "false") {
        mobileNav.setAttribute("data-visible", "true");
        navToggle.setAttribute("aria-expanded","true");
    } else if (visibility === "true") {
        mobileNav.setAttribute("data-visible", "false");
        navToggle.setAttribute("aria-expanded", "false");
    }
});

