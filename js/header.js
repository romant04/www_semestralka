let mobileMenuOpened = false;

// Header hiding based on scrolling
const header = document.getElementById("header");

let scrollPosition = 0;
let scrollFromLastDirectionChange = 0;
const scrollTolerance = 25;

function onScroll(event) {
    const { scrollY } = event.currentTarget;
    const newScrollPosition = Math.max(scrollY, 0);
    const oldDirection = scrollFromLastDirectionChange < 0 ? "up" : "down";
    const newDirection = newScrollPosition > scrollPosition ? "down" : "up";

    if (oldDirection !== newDirection) {
        scrollFromLastDirectionChange = 0;
    }
    scrollFromLastDirectionChange += newScrollPosition - scrollPosition;

    scrollPosition = newScrollPosition;

    if (
        Math.abs(scrollFromLastDirectionChange) > scrollTolerance &&
        scrollY > header.offsetHeight &&
        mobileMenuOpened === false
    ) {
        if (scrollFromLastDirectionChange < 0) {
            header.style.transform = "translateY(0)";
        } else {
            header.style.transform = "translateY(-100%)";
        }
    }

    // Ensure that there header will always stick to top when we see can see it
    if (scrollY < header.offsetHeight && header.style.transform !== "translateY(0)") {
        header.style.transform = "translateY(0)";
    }
}

window.addEventListener("scroll", onScroll);

// Open user detail menu
const downPopupBtn = document.getElementById("down-popup");
const downPopup = document.querySelector(".user-popup.down");

const upPopupBtn = document.getElementById("up-popup");
const upPopup = document.querySelector(".user-popup.up");

let downOpened = false;
downPopupBtn.addEventListener("click", () => {
    downOpened = !downOpened;

    if (downOpened) {
        downPopupBtn.classList.add("active");
        downPopup.classList.add("active");
    } else {
        downPopupBtn.classList.remove("active");
        downPopup.classList.remove("active");
    }
});

let upOpened = false;
upPopupBtn.addEventListener("click", () => {
    upOpened = !upOpened;

    if (upOpened) {
        upPopupBtn.classList.add("active");
        upPopup.classList.add("active");
    } else {
        upPopupBtn.classList.remove("active");
        upPopup.classList.remove("active");
    }
});

// Responsive mobile menu
const menu = document.getElementById("mobile-menu");
const menuShadow = document.getElementById("mobile-menu--shadow");
const links = document.querySelectorAll(".navbar a");

const burger = document.getElementById("burger");
const closeButton = document.getElementById("close-btn");

function openMobileMenu() {
    menu.style.transform = "translateX(0)";
    menu.style.pointerEvents = "all";

    menuShadow.style.opacity = "1";
    menuShadow.style.pointerEvents = "all";

    mobileMenuOpened = true;
}
function closeMobileMenu() {
    menu.style.transform = "translateX(100%)";
    menu.style.pointerEvents = "none";

    menuShadow.style.opacity = "0";
    menuShadow.style.pointerEvents = "none";

    mobileMenuOpened = false;
}

burger.addEventListener("click", openMobileMenu);

closeButton.addEventListener("click", closeMobileMenu);
menuShadow.addEventListener("click", closeMobileMenu);

for (let link of links) {
    link.addEventListener("click", closeMobileMenu);
}
