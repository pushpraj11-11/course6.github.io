const signupButton = document.getElementById('signup-button');
const modal = document.getElementById('modal');
const closeButton = document.getElementsByClassName('close')[0];
const signupModalButton = document.getElementById('signup-modal-button');
const nameInput = document.getElementById('name-input');
const usernameInput = document.getElementById('username-input');
const passwordInput = document.getElementById('password-input');
const confirmPasswordInput = document.getElementById('confirm-password-input');

signupButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});




// 2nd buttn signin
const signinButton = document.getElementById('signin-button');
const signinModal = document.getElementById('signin-modal');
const signinCloseButton = signinModal.getElementsByClassName('close')[0];
const signinModalButton = document.getElementById('signin-modal-button');
const usernameInputs = document.getElementById('username-input');
const passwordInputs = document.getElementById('password-input');
const signupLink = document.getElementById('signup-link');

signinButton.addEventListener('click', () => {
  signinModal.style.display = 'block';
});

signinCloseButton.addEventListener('click', () => {
  signinModal.style.display = 'none';
});

