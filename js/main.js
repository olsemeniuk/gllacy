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
  sliderListSlide = sliderList.querySelectorAll('.item-slider'),
  activeSlide = sliderList.querySelector('.item-slider--active'),
  strawberrySlide = sliderList.querySelector('.item-slider--strawberry'),
  bananaSlide = sliderList.querySelector('.item-slider--banana'),
  marshmallowSlide = sliderList.querySelector('.item-slider--marshmallow'),
  bodyTag = document.querySelector('body'),
  sliderDots = document.querySelectorAll('.slider__dots-button');

sliderDots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    for (let i = 0; i < sliderDots.length; i++) {
      sliderDots[i].classList.remove('slider__dots-button--active');
    };
    dot.classList.add('slider__dots-button--active');
    bodyTag.classList.remove('pink-bg');
    bodyTag.classList.remove('blue-bg');
    bodyTag.classList.remove('yellow-bg');
    sliderListSlide.forEach(slide => {
      slide.classList.remove('item-slider--active');
    });
    if (i === 0) {
      strawberrySlide.classList.add('item-slider--active');
      bodyTag.classList.add('pink-bg');
      bodyTag.classList.remove('blue-bg');
      bodyTag.classList.remove('yellow-bg');
    } else if (i === 1) {
      bananaSlide.classList.add('item-slider--active');
      bodyTag.classList.add('blue-bg');
      bodyTag.classList.remove('pink-bg');
      bodyTag.classList.remove('yellow-bg');
    } else if (i === 2) {
      marshmallowSlide.classList.add('item-slider--active');
      bodyTag.classList.add('yellow-bg');
      bodyTag.classList.remove('pink-bg');
      bodyTag.classList.remove('blue-bg');
    };
  });
});


// modal window
const modal = document.querySelector('.modal'),
  overlay = document.querySelector('.overlay'),
  modalOpen = document.querySelectorAll('.open-modal'),
  modalCloseBtn = modal.querySelector('.modal__close-button'),
  modalNameInput = modal.querySelector('#contact-name-input');

modalOpen.forEach(open => {
  open.addEventListener('click', () => {
    if (!overlay.classList.contains('overlay--active')) {
      overlay.classList.add('overlay--active');
      modal.classList.add('modal--active');
      modalNameInput.focus();
    };
  });
});

const closeModal = (modalCloser) => {
  modalCloser.addEventListener('click', () => {
    if (overlay.classList.contains('overlay--active')) {
      overlay.classList.remove('overlay--active');
      modal.classList.remove('modal--active');
      // modalNameInput.blur();
    };
  });
};

modal.addEventListener('click', e => {
  e.stopPropagation();
});

window.addEventListener('keydown', e => {
  if (e.code === 'Escape') {
    overlay.classList.remove('overlay--active');
    modal.classList.remove('modal--active');
  };
});

closeModal(overlay);
closeModal(modalCloseBtn);

