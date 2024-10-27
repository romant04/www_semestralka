const menu = document.getElementById("mobile-menu");
const menuShadow = document.getElementById("mobile-menu--shadow");

const burger = document.getElementById("burger");
const closeButton = document.getElementById("close-btn");

function openMobileMenu() {
    menu.style.transform = "translateX(0)";
    menu.style.pointerEvents = "all";

    menuShadow.style.opacity = "1";
    menuShadow.style.pointerEvents = "all";
}
function closeMobileMenu() {
    menu.style.transform = "translateX(100%)";
    menu.style.pointerEvents = "none";

    menuShadow.style.opacity = "0";
    menuShadow.style.pointerEvents = "none";
}

burger.addEventListener("click", openMobileMenu);

closeButton.addEventListener("click", closeMobileMenu);
menuShadow.addEventListener("click", closeMobileMenu);
