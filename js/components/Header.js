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
          <li><a href="ladder.html">Žebříček</a></li>
        </ul>
        <div class="auth">
          <div class="user-card">
            <button class="button transparent user-menu" id="down-popup">
              <p class="username">Roman</p>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="chevron-down" width="512" height="512" x="0" y="0" version="1.1" viewBox="0 0 512 512">
                <path fill="currentColor" d="M256 298.3l174.2-167.2c4.3-4.2 11.4-4.1 15.8.2l30.6 29.9c4.4 4.3 4.5 11.3.2 15.5L264.1 380.9c-2.2 2.2-5.2 3.2-8.1 3-3 .1-5.9-.9-8.1-3L35.2 176.7c-4.3-4.2-4.2-11.2.2-15.5L66 131.3c4.4-4.3 11.5-4.4 15.8-.2L256 298.3z"></path>
              </svg>
            </button>

            <div class="user-popup down">
              <div class="links">
                <a href="#">Můj účet</a>
                <a href="#">Přátelé</a>
              </div> 
              <hr />
              <button class="button primary full-width sign-out">Odhlásit se</button>
            </div>
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
            <button class="button transparent user-menu" id="up-popup">
              <p class="username">Roman</p>
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" id="chevron-down" width="512" height="512" x="0" y="0" version="1.1" viewBox="0 0 512 512">
                <path fill="currentColor" d="M256 298.3l174.2-167.2c4.3-4.2 11.4-4.1 15.8.2l30.6 29.9c4.4 4.3 4.5 11.3.2 15.5L264.1 380.9c-2.2 2.2-5.2 3.2-8.1 3-3 .1-5.9-.9-8.1-3L35.2 176.7c-4.3-4.2-4.2-11.2.2-15.5L66 131.3c4.4-4.3 11.5-4.4 15.8-.2L256 298.3z"></path>
              </svg>
            </button>

            <div class="user-popup up">
                <div class="links">
                  <a href="#">Můj účet</a>
                  <a href="#">Přátelé</a>
                </div> 
                <hr />
                <button class="button primary full-width sign-out">Odhlásit se</button>
            </div>
          </div>
          <a href="./login.html" class="button primary sign-in">Přihlásit se</a>
        </div>
      </nav>
    </header>
      `;
  }
}

customElements.define("custom-header", Header);
