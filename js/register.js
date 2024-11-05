const form = document.getElementById("auth-form");
const username = document.getElementById("username");
const email = document.getElementById("user-email");
const password = document.getElementById("password");
const passwordRepeat = document.getElementById("passwordRepeat");

if (form !== null) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (
      username.value === "" ||
      email.value === "" ||
      password === "" ||
      passwordRepeat === ""
    ) {
      // Do not bother with extra auth logic. Will be implemented when project gets refactored to JS framework
      alert("Prosím vyplň všechny pole formuláře");
      return;
    }

    localStorage.setItem(
      "authToken",
      JSON.stringify({
        username: username.value,
        email: email.value,
      })
    );
    window.location.href = "index.html";
  });
}
