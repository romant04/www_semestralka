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
  if (
    scrollY < header.offsetHeight &&
    header.style.transform !== "translateY(0)"
  ) {
    header.style.transform = "translateY(0)";
  }
}

window.addEventListener("scroll", onScroll);

// Responsive mobile menu
const menu = document.getElementById("mobile-menu");
const menuShadow = document.getElementById("mobile-menu--shadow");

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
