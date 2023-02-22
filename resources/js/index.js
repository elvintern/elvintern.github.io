const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');
const hamburgerIcon = document.querySelector('.hamburger-icon');
const navMenu = document.querySelector('.nav__list--menu');
const alertMsg = document.querySelector('.alert-msg');

document.addEventListener(
  'scroll',
  () => {
    if (window.scrollY >= 200) {
      nav.classList.add('nav--bar');
    } else if (window.scrollY < 200) {
      nav.classList.remove('nav--bar');
    }
  },
  { passive: true }
);

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('nav__list--menu--clicked');
  hamburgerIcon.classList.toggle('fa-times');
});

function sendEmail() {
  var params = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  const serviceID = 'service_2arsoqq';
  const templateID = 'template_2cpe30m';

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById('name').value = '';
      document.getElementById('email').value = '';
      document.getElementById('message').value = '';
      alertMsg.classList.add('alert-msg--success');
    })
    .catch((err) => console.log(err));
}
