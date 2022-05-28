// create nav
const createNav = () => {
  let nav = document.querySelector('.navbar');
  nav.innerHTML = `
    <div class="nav w-100 flex-column flex flex-md-row">
      <a href="index.html"><img src="./imgs/dark-logo.png" class="brand-logo d-none d-md-block mx-auto d-lg-block mx-lg-0" /></a>
      <div class="nav-items justify-content-center col-12 col-md-6">
        <div class="search mx-3 col-8">
          <input
          type="text"
          class="search-box col-10 col-lg-8"
          placeholder="search brand, product"
          />
          <button class="search-btn col-4">search</button>
        </div>
        <div class="d-flex col-3 justify-content-around">
          <a href='signup.html'>
            <img src="./imgs/new-registration.webp"/>
          </a>
          <a>
            <img src="./imgs/user.png" id="user-img" />
            <div class="login-logout-popup hide">
              <p class="account-info">log in as, name</p>
              <button class="btn" id="user-btn">log out</button>
            </div>
          </a>
          <a href="cart.html"><img src="./imgs/cart.png" /></a>
        </div>
      </div>
    </div>
    <ul class="links-container">
        <li class="link-item"><a href="index.html" class="link">home</a></li>
        <li class="link-item"><a href="#" class="link">women</a></li>
        <li class="link-item"><a href="#" class="link">men</a></li>
        <li class="link-item"><a href="#" class="link">kids</a></li>
        <li class="link-item"><a href="#" class="link">accessories</a></li>
    </ul>
    `;
};
createNav();

// nav popup
const userImageButton = document.querySelector('#user-img');
const userPopup = document.querySelector('.login-logout-popup');
const popupText = document.querySelector('.account-info');
const actionBtn = document.querySelector('#user-btn');

userImageButton.addEventListener('click', () => {
  userPopup.classList.toggle('hide');
});

window.onload = () => {
  let user = JSON.parse(localStorage.getItem('usr') || null);
  if (user != null) {
    popupText.innerHTML = `log in as, ${user[0].name}`;
    actionBtn.innerHTML = 'log out';
    actionBtn.addEventListener('click', () => {
      localStorage.removeItem('usr');
      location.reload();
    });
  } else {
    popupText.innerHTML = 'log in to place order';
    actionBtn.innerHTML = 'log in';
    actionBtn.addEventListener('click', () => {
      location.href = 'login.html';
    });
  }
};
