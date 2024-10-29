const userCard = document.querySelectorAll(".user-card");
const username = document.querySelectorAll(".username");
const signIn = document.querySelectorAll(".sign-in");

const userInfo = JSON.parse(localStorage.getItem("authToken"));

if (userInfo) {
  for (let sgn of signIn) {
    sgn.style.display = "none";
  }
  for (let card of userCard) {
    card.style.display = "flex";
  }
  for (let name of username) {
    name.textContent = userInfo.username;
  }
}
