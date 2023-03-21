const searchPopup = document.querySelector('.search-popup'),
  searchInput = searchPopup.querySelector('.search-popup__input'),
  searchResetBtn = searchPopup.querySelector('.search-popup__reset-button'),
  openSearchBtn = document.querySelector('.open-search'),
  passwordInputWrapper = document.querySelector('.login-form__password-block'),
  loginPasswordInput = document.getElementById('login-password-input'),
  loginEmailInput = document.getElementById('login-email-input'),
  openLoginButton = document.querySelector('.user-nav__button-login'),
  loginPopup = document.querySelector('.login-popup');

// function that openes popup
const openPopup = (popupOpener, popup, focusedElement) => {
  if (!popupOpener.classList.contains('user-nav__button--active')) {
    popupOpener.classList.add('user-nav__button--active');
    popup.classList.add('popup--active');
    focusedElement.focus();
  };
};

// function that closes popup
const closePopup = (popupOpener, popup, focusedElement) => {
  if (popupOpener.classList.contains('user-nav__button--active')) {
    popupOpener.classList.remove('user-nav__button--active');
    popup.classList.remove('popup--active');
    focusedElement.blur();
    popupOpener.classList.remove('user-nav__button--active');
  };
};

// function that closes popup after click anywhere outlide popup or opening button
const closePopupByClick = (popupOpener, popup, popupSelector, focusedElement) => {
  document.addEventListener('mousedown', e => {
    if (e.target.closest(popupSelector) === null && e.target !== popupOpener) {
      closePopup(popupOpener, popup, focusedElement);
    };
  });
};

// popups open
openSearchBtn.addEventListener('click', () => openPopup(openSearchBtn, searchPopup, searchInput));
openLoginButton.addEventListener('click', () => openPopup(openLoginButton, loginPopup, loginEmailInput));

// popups close on escape key
window.addEventListener('keydown', e => {
  if (e.code === 'Escape') {
    closePopup(openSearchBtn, searchPopup, searchInput);
    closePopup(openLoginButton, loginPopup, loginEmailInput);
  };
});

// popups close on clicking anywhere outlide popup or opening button
closePopupByClick(openSearchBtn, searchPopup, '.search-popup', searchInput);
closePopupByClick(openLoginButton, loginPopup, '.login-popup', loginEmailInput);

// reset button settings in search field in header search-popup
searchResetBtn.addEventListener('click', () => {
  searchInput.focus();
  searchResetBtn.classList.remove('search-popup__reset-button--active');
});

searchInput.addEventListener('input', () => {
  if (!searchResetBtn.classList.contains('search-popup__reset-button--active')) {
    searchResetBtn.classList.add('search-popup__reset-button--active');
  };

  if (searchInput.value === '') {
    if (searchResetBtn.classList.contains('search-popup__reset-button--active')) {
      searchResetBtn.classList.remove('search-popup__reset-button--active');
    };
  };
});

// adds and removes pseudo placeholder in header login form password input
loginPasswordInput.addEventListener('input', () => {
  if (loginPasswordInput.value !== '') {
    passwordInputWrapper.classList.remove('login-form__password-block--active');
  } else {
    passwordInputWrapper.classList.add('login-form__password-block--active');
  };
});
