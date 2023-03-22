// header popups
const searchPopup = document.querySelector('.search-popup'),
      searchInput = searchPopup.querySelector('.search-popup__input'),
      searchResetBtn = searchPopup.querySelector('.search-popup__reset-button'),
      openSearchPopup = document.querySelector('.open-search'),
      passwordInputWrapper = document.querySelector('.login-form__password-block'),
      loginPasswordInput = document.getElementById('login-password-input'),
      loginEmailInput = document.getElementById('login-email-input'),
      openLoginPopup = document.querySelector('.user-nav__button-login'),
      loginPopup = document.querySelector('.login-popup'),
      cartPopup = document.querySelector('.cart-popup'),
      openCartPopup = document.querySelector('.cart-button');

// function that openes popup
const openPopup = (popupOpener, popup, focusedElement) => {
  if (!popupOpener.classList.contains('user-nav__button--active')) {
    popupOpener.classList.add('user-nav__button--active');
    popup.classList.add('popup--active');
    if (focusedElement) {
      focusedElement.focus();
    };
  } else {
    popupOpener.classList.remove('user-nav__button--active');
    popup.classList.remove('popup--active');
    if (focusedElement) {
      focusedElement.blur();
    };
  };
};

// function that closes popup
const closePopup = (popupOpener, popup, popupSelector, focusedElement) => {
  const closePopupInnerFunction = (popupOpener, popup, focusedElement) => {
    if (popupOpener.classList.contains('user-nav__button--active')) {
      popupOpener.classList.remove('user-nav__button--active');
      popup.classList.remove('popup--active');
      popupOpener.classList.remove('user-nav__button--active');
      if (focusedElement) {
        focusedElement.blur();
      };
    };
  };
  document.addEventListener('mousedown', e => {
    if (e.target.closest(popupSelector) === null && e.target !== popupOpener) {
      closePopupInnerFunction(popupOpener, popup, focusedElement);
    };
  });
  window.addEventListener('keydown', e => {
    if (e.code === 'Escape') {
      closePopupInnerFunction(popupOpener, popup, focusedElement);
    };
  });
};

// popups open
openSearchPopup.addEventListener('click', () => openPopup(openSearchPopup, searchPopup, searchInput));
openLoginPopup.addEventListener('click', () => openPopup(openLoginPopup, loginPopup, loginEmailInput));
openCartPopup.addEventListener('click', () => openPopup(openCartPopup, cartPopup));

// popups close
closePopup(openSearchPopup, searchPopup, '.search-popup', searchInput);
closePopup(openLoginPopup, loginPopup, '.login-popup', loginEmailInput);
closePopup(openCartPopup, cartPopup, '.cart-popup');

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

// slider
const sliderList = document.querySelector('.slider__list'),
      activeSlide = sliderList.querySelector('.item-slider--active'),
      bodyTag = document.querySelector('body');

bodyTag.classList.remove('pink-bg');
bodyTag.classList.remove('blue-bg');
bodyTag.classList.remove('yellow-bg');

if (activeSlide.classList.contains('item-slider--strawberry')) {
  bodyTag.classList.add('pink-bg');
} else if (activeSlide.classList.contains('item-slider--banana')) {
  bodyTag.classList.add('blue-bg');
} else if (activeSlide.classList.contains('item-slider--marshmallow')) {
  bodyTag.classList.add('yellow-bg');
};
