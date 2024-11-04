class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <header>
      <nav class="navbar" id="header">
        <h1>Duelovky</h1>
        <ul>
          <li><a href="index.html#obsah">Hry</a></li>
          <li><a href="#chat">Chat</a></li>
          <li><a href="#pratele">Přátelé</a></li>
          <li><a href="#zebricek">Žebříček</a></li>
        </ul>
        <div class="auth">
          <div class="user-card">
            <p class="username">Roman</p>
          </div>
          <a href="./login.html" class="button primary sign-in">Přihlásit se</a>
        </div>
        <button
          class="burger"
          id="burger"
          aria-label="burger menu"
          style="background: none; border: none; color: white"
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
              fill="currentColor"
            />
          </svg>
        </button>

        <div class="mobile-menu--shadow" id="mobile-menu--shadow"></div>
        <div class="mobile-menu" id="mobile-menu">
          <h1>Duelovky</h1>
          <span id="close-btn">X</span>

          <ul>
            <li><a href="index.html#obsah">Hry</a></li>
            <li><a href="#chat">Chat</a></li>
            <li><a href="#pratele">Přátelé</a></li>
            <li><a href="#zebricek">Žebříček</a></li>
          </ul>

          <div class="auth">
            <div class="user-card">
              <p class="username">Roman</p>
            </div>
            <a href="./login.html" class="button primary sign-in"
              >Přihlásit se</a
            >
          </div>
        </div>
      </nav>
    </header>
      `;
  }
}

customElements.define("custom-header", Header);
