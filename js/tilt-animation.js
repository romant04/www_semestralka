const cards = document.querySelectorAll(".game-card");

for (let card of cards) {
  card.addEventListener("mousemove", (e) => {
    const cardRect = card.getBoundingClientRect();

    const x = e.clientX - cardRect.left;
    const y = e.clientY - cardRect.top;

    const centerX = cardRect.width / 2;
    const centerY = cardRect.height / 2;

    const rotateX = -((y - centerY) / centerY) * 10;
    const rotateY = -((centerX - x) / centerX) * 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
}
